import { siteData } from '../data/siteData';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Skills"
            title="Tools of the trade"
            subtitle="Technologies I use day-to-day to build production-quality apps."
          />
        </Reveal>

        {/* All 5 groups in one equal-height row */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1rem',
            alignItems: 'stretch',
          }}
        >
          {siteData.skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.07}>
              {/* height:100% makes every card stretch to the tallest sibling */}
              <div style={{
                height: '100%',
                padding: '1.25rem',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: 12,
                backdropFilter: 'var(--glass-blur)',
                WebkitBackdropFilter: 'var(--glass-blur)',
                boxShadow: 'var(--glass-shadow)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}>
                {/* Category label */}
                <h3 style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  flexShrink: 0,
                }}>
                  {group.group}
                </h3>

                {/* Tags — grow to fill remaining card height */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  alignContent: 'flex-start',
                  flexGrow: 1,
                }}>
                  {group.items.map(item => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        /* Tablet: 3 columns, last 2 centred */
        @media (max-width: 960px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        /* Mobile: 2 columns */
        @media (max-width: 560px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        /* Very small: 1 column */
        @media (max-width: 360px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
