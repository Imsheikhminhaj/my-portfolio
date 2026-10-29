import { siteData } from '../data/siteData';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function Process() {
  return (
    <section id="process" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <Reveal>
          <SectionHeading
            label="How I Work"
            title="Simple, clear process"
            subtitle="No jargon, no surprises. Here's exactly what working together looks like."
            center
          />
        </Reveal>

        {/* 4-column equal-height grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          marginBottom: '2.5rem',
          alignItems: 'stretch',
        }}
          className="process-grid"
        >
          {siteData.process.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <div style={{
                height: '100%',
                padding: '1.5rem',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: 12,
                backdropFilter: 'var(--glass-blur)',
                WebkitBackdropFilter: 'var(--glass-blur)',
                boxShadow: 'var(--glass-shadow)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Large background step number */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: -8,
                    right: 12,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 900,
                    fontSize: '5rem',
                    color: 'var(--accent)',
                    opacity: 0.07,
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  {step.step}
                </span>

                {/* Step badge */}
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'var(--accent)',
                  color: '#fff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.04em',
                  flexShrink: 0,
                }}>
                  {step.step}
                </span>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  lineHeight: 1.2,
                }}>
                  {step.title}
                </h3>

                {/* Description — grows to fill card height */}
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted)',
                  lineHeight: 1.65,
                  flexGrow: 1,
                }}>
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Policy note */}
        <Reveal delay={0.3}>
          <div style={{
            textAlign: 'center',
            padding: '1rem 1.5rem',
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            maxWidth: 560,
            margin: '0 auto',
          }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--text)' }}>Fair terms: </strong>
              {siteData.processNote}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Responsive: 2-col on tablet, 1-col on mobile */}
      <style>{`
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
