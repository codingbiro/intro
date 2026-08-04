import { useEffect, useState } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const TYPE_DELAY = 90;
const DELETE_DELAY = 40;
const HOLD_DELAY = 1800;
const NEXT_DELAY = 400;

/** Cycles through `strings` with a type/delete effect. Static when reduced motion is preferred. */
export default function useTypewriter(strings: string[]): string {
  const [text, setText] = useState('');
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (strings.length === 0) return;
    if (reduced) {
      setText(strings[0]);
      return;
    }

    let index = 0;
    let chars = 0;
    let deleting = false;
    let timer = 0;

    const tick = () => {
      const current = strings[index % strings.length];
      chars += deleting ? -1 : 1;
      setText(current.slice(0, chars));

      let delay = deleting ? DELETE_DELAY : TYPE_DELAY;
      if (!deleting && chars === current.length) {
        deleting = true;
        delay = HOLD_DELAY;
      } else if (deleting && chars === 0) {
        deleting = false;
        index += 1;
        delay = NEXT_DELAY;
      }
      timer = window.setTimeout(tick, delay);
    };

    timer = window.setTimeout(tick, NEXT_DELAY);
    return () => window.clearTimeout(timer);
  }, [strings, reduced]);

  return text;
}
