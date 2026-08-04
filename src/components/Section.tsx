import type { ReactNode } from 'react';
import useReveal from '../hooks/useReveal';

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ id, title, subtitle, children }: Props) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id={id} className="section">
      <div className="container reveal" ref={ref}>
        <h2 className="section-title">{title}</h2>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        {children}
      </div>
    </section>
  );
}
