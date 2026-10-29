import { User } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
        }}
          className="about-grid"
        >
          {/* Photo */}
          <Reveal>
            <div style={{
              width: '100%',
              maxWidth: 320,
              aspectRatio: '1',
              borderRadius: 16,
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              overflow: 'hidden',
            }}>
              {siteData.aboutPhoto ? (
                <img
                  src={siteData.aboutPhoto}
                  alt="Minhaj"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <>
                  <User size={48} style={{ color: 'var(--muted)', opacity: 0.4 }} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
                    Add your photo to /public/minhaj.jpg
                  </span>
                </>
              )}
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <SectionHeading
                label="About"
                title={`Hi, I'm ${siteData.name}`}
                subtitle="A developer who delivers"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '55ch' }}>
                {siteData.aboutText}
              </p>
            </Reveal>

            {/* Quick facts */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
              {siteData.quickFacts.map((fact, i) => (
                <Reveal key={fact.label} delay={0.15 + i * 0.07}>
                  <div style={{
                    padding: '1rem 1.25rem',
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    minWidth: 120,
                  }}>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '1.5rem',
                      color: 'var(--accent)',
                    }}>
                      {fact.value}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.15rem' }}>
                      {fact.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 280px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
