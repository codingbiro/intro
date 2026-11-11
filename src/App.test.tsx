import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { content } from './data/content';

describe('App', () => {
  it('renders the intro with the name and contact links', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Vince Biró');
    expect(screen.getAllByRole('link', { name: /email/i })[0]).toHaveAttribute(
      'href',
      'mailto:hello@birovince.com',
    );
    expect(screen.getAllByRole('link', { name: /github/i })[0]).toHaveAttribute(
      'href',
      'https://github.com/codingbiro',
    );
  });

  it('links every section from the "on this page" nav', () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: content.nav.label });

    for (const { id, label } of content.nav.items) {
      expect(within(nav).getByRole('link', { name: label })).toHaveAttribute('href', `#${id}`);
      expect(document.getElementById(id)).toBeInTheDocument();
    }
  });

  it('lists every outcome and describes every photo', () => {
    render(<App />);

    for (const outcome of content.outcomes.items) {
      expect(screen.getByText(outcome.title)).toBeInTheDocument();
    }
    for (const photo of [content.background.photo, content.outside.photo]) {
      expect(screen.getByAltText(photo.alt)).toHaveAttribute('src', photo.src);
    }
  });

  it('toggles dark mode', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /dark mode/i }));
    expect(document.documentElement.dataset.theme).toBe('dark');
  });
});
