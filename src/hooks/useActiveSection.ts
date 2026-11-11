import { useEffect, useState } from 'react';

/** Returns the id of the section currently being read, for the sidebar's "on this page" nav. */
export default function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const root = document.documentElement;
      // Nothing to track when the page does not scroll (also the case under jsdom).
      if (root.scrollHeight <= window.innerHeight) return;

      // The active section is the last one whose top has passed a line 30% down the viewport.
      const line = window.innerHeight * 0.3;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // A short final section can never reach that line, so the bottom of the page counts as it.
      if (window.innerHeight + window.scrollY >= root.scrollHeight - 2) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}
