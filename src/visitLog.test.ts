import { logVisit } from './visitLog';

const ENDPOINT = 'https://travels-logger.birovince.workers.dev/log';

function visit(url: string) {
  vi.stubGlobal('location', new URL(url));
}

function stubSendBeacon(result: boolean) {
  const sendBeacon = vi.fn<(url: string, body: Blob) => boolean>(() => result);
  Object.defineProperty(navigator, 'sendBeacon', { value: sendBeacon, configurable: true });
  return sendBeacon;
}

function stubFetch() {
  const fetchMock = vi.fn<(url: string, init: RequestInit) => Promise<Response>>(() =>
    Promise.resolve(new Response('ok')),
  );
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

function readBlob(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsText(blob);
  });
}

describe('logVisit', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    Reflect.deleteProperty(navigator, 'sendBeacon');
  });

  it('sends one beacon with the path, referrer and screen size on the live site', async () => {
    visit('https://birovince.com/');
    const sendBeacon = stubSendBeacon(true);
    const fetchMock = stubFetch();

    logVisit();

    expect(sendBeacon).toHaveBeenCalledTimes(1);
    const [url, body] = sendBeacon.mock.calls[0];
    expect(url).toBe(`${ENDPOINT}?p=%2F`);
    expect(body.type).toBe('text/plain');
    expect(JSON.parse(await readBlob(body))).toEqual({
      ref: document.referrer,
      screen: `${window.screen.width}x${window.screen.height}`,
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it.each(['http://localhost:5173/', 'http://127.0.0.1:4173/', 'https://intro.onrender.com/'])(
    'stays silent on %s',
    (url) => {
      visit(url);
      const sendBeacon = stubSendBeacon(true);
      const fetchMock = stubFetch();

      logVisit();

      expect(sendBeacon).not.toHaveBeenCalled();
      expect(fetchMock).not.toHaveBeenCalled();
    },
  );

  it('falls back to fetch when the beacon is refused', () => {
    visit('https://birovince.com/');
    stubSendBeacon(false);
    const fetchMock = stubFetch();

    logVisit();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(`${ENDPOINT}?p=%2F`);
    expect(init).toMatchObject({ method: 'POST', keepalive: true });
    expect(JSON.parse(String(init.body))).toHaveProperty('screen');
  });

  it('falls back to fetch when the browser has no sendBeacon', () => {
    visit('https://birovince.com/');
    const fetchMock = stubFetch();

    logVisit();

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('never throws, even if sending fails', () => {
    visit('https://birovince.com/');
    Object.defineProperty(navigator, 'sendBeacon', {
      value: () => {
        throw new Error('blocked');
      },
      configurable: true,
    });

    expect(() => logVisit()).not.toThrow();
  });
});
