// Reports one page view to the visit log shared with travels.birovince.com:
// the "travels-logger" Cloudflare Worker (source in the travels repo, logger/).
// The Worker reads the IP address, location and browser from the request
// itself; the page only adds the referrer and the screen size.

const ENDPOINT = 'https://travels-logger.birovince.workers.dev/log';

// Only the live site reports visits, so local dev, previews and test renders
// stay out of the log. www redirects to the bare domain.
const LIVE_HOST = 'birovince.com';

export function logVisit(): void {
  try {
    if (window.location.hostname !== LIVE_HOST) return;

    const data = JSON.stringify({
      ref: document.referrer,
      screen: `${window.screen.width}x${window.screen.height}`,
    });
    const url = `${ENDPOINT}?p=${encodeURIComponent(window.location.pathname)}`;

    // text/plain keeps the beacon a simple request, so no CORS preflight.
    const queued = navigator.sendBeacon?.(url, new Blob([data], { type: 'text/plain' }));
    if (!queued) {
      fetch(url, { method: 'POST', body: data, keepalive: true }).catch(() => {});
    }
  } catch {
    // Logging must never break the page.
  }
}
