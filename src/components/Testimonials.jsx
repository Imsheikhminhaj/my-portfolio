import { Quote } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Testimonials"
            title="What clients say"
            center
          />
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '1.5rem',
        }}>
          {siteData.testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1}>
              <article
                className="card"
                style={{
                  padding: '1.75rem',
                  position: 'relative',
                  border: '1px dashed var(--border)',
                  opacity: 0.7,
                }}
              >
                {/* Placeholder notice */}
                <div style={{
                  position: 'absolute',
                  top: 10, right: 10,
                  background: 'var(--accent)',
                  color: '#fff',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  borderRadius: 999,
                  padding: '2px 8px',
                }}>
                  Placeholder
                </div>

                <Quote size={24} style={{ color: 'var(--accent)', opacity: 0.4, marginBottom: '1rem' }} />

                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text)',
                  lineHeight: 1.7,
                  marginBottom: '1.25rem',
                  fontStyle: 'italic',
                }}>
                  "{t.quote}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {/* Avatar placeholder */}
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'var(--border)',
                    flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{t.author}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{t.role}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
