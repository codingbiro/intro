import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders the hero with the greeting and contact links', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hi, I am Vince');
    expect(screen.getAllByRole('link', { name: /let's talk/i })[0]).toHaveAttribute(
      'href',
      'mailto:hello@birovince.com',
    );
    expect(screen.getAllByRole('link', { name: /github/i })[0]).toHaveAttribute(
      'href',
      'https://github.com/codingbiro',
    );
  });

  it('toggles dark mode', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /dark mode/i }));
    expect(document.documentElement.dataset.theme).toBe('dark');
  });
});
