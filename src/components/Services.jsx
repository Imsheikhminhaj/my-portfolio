import { Zap, Briefcase, Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const ICONS = { Zap, Briefcase, Code2 };

function ServiceCard({ service, onRequestClick }) {
  const Icon = ICONS[service.icon] || Zap;

  return (
    <article
      style={{
        flex: '0 0 300px',
        width: 300,
        background: 'var(--glass-bg)',
        border: service.highlight ? '2px solid var(--accent)' : '1px solid var(--glass-border)',
        borderRadius: 14,
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        scrollSnapAlign: 'start',
        position: 'relative',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        boxShadow: service.highlight ? '0 0 0 4px rgba(1,75,170,.08), var(--glass-shadow)' : 'var(--glass-shadow)',
        transition: 'box-shadow .25s ease, transform .25s ease',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = service.highlight
          ? '0 8px 32px rgba(1,75,170,.25), var(--glass-shadow)'
          : 'var(--glass-shadow), 0 0 0 1px var(--glass-border)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = service.highlight
          ? '0 0 0 4px rgba(1,75,170,.08), var(--glass-shadow)'
          : 'var(--glass-shadow)';
      }}
    >
      {/* Most popular badge */}
      {service.highlight && (
        <span style={{
          position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--accent)', color: '#fff',
          fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.07em',
          textTransform: 'uppercase', borderRadius: 999, padding: '3px 12px', whiteSpace: 'nowrap',
        }}>
          Most popular
        </span>
      )}

      {/* Icon */}
      <div style={{
        width: 42, height: 42, borderRadius: 10,
        background: 'rgba(1,75,170,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--accent)', flexShrink: 0,
      }}>
        <Icon size={20} />
      </div>

      {/* Name + pitch */}
      <div>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text)' }}>
          {service.name}
        </h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.83rem', lineHeight: 1.55 }}>
          {service.pitch}
        </p>
      </div>

      {/* Features list — grows to fill remaining space */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', flexGrow: 1 }}>
        {service.features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.83rem', color: 'var(--muted)' }}>
            <CheckCircle2 size={14} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.18rem' }} />
            {f}
          </li>
        ))}
      </ul>

      {/* Price */}
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
        fontSize: '1.05rem', color: 'var(--text)',
        paddingTop: '0.25rem', borderTop: '1px solid var(--glass-border)',
      }}>
        {service.price}
      </div>

      {/* CTA */}
      <button
        onClick={() => onRequestClick(service.formType)}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          gap: 6, height: 42, borderRadius: 999,
          fontWeight: 600, fontSize: '0.875rem',
          cursor: 'pointer', fontFamily: 'inherit',
          transition: 'background .18s ease, transform .15s ease',
          border: 'none',
          ...(service.highlight
            ? { background: 'var(--accent)', color: '#fff', boxShadow: '0 2px 10px rgba(1,75,170,.28)' }
            : { background: 'var(--surface)', color: 'var(--text)', border: '1.5px solid var(--border)' }
          ),
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.background = service.highlight ? 'var(--accent-hover)' : 'var(--border)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.background = service.highlight ? 'var(--accent)' : 'var(--surface)';
        }}
      >
        {service.cta} <ArrowRight size={14} />
      </button>
    </article>
  );
}

export default function Services({ onServiceRequest }) {
  const handleRequest = (formType) => {
    if (onServiceRequest) onServiceRequest(formType);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Services"
            title="What I can build for you"
            subtitle="Pick the package that fits your business, or tell me your idea."
          />
        </Reveal>

        {/* Scroll hint */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Swipe to compare packages →</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)', opacity: 0.7 }}>{siteData.services.length} packages</span>
        </div>

        {/* Horizontal scroll — inside container, stays centered */}
        <div
          className="services-scroll"
          style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            overflowY: 'visible',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '0.75rem',
            paddingTop: '1rem',   /* space for "Most popular" badge */
            cursor: 'grab',
            alignItems: 'stretch',
          }}
          onMouseDown={e => {
            const el = e.currentTarget;
            el.style.cursor = 'grabbing';
            el.dataset.startX = e.pageX - el.offsetLeft;
            el.dataset.scrollLeft = el.scrollLeft;
            el.dataset.dragging = 'true';
          }}
          onMouseMove={e => {
            const el = e.currentTarget;
            if (el.dataset.dragging !== 'true') return;
            e.preventDefault();
            const x = e.pageX - el.offsetLeft;
            const walk = (x - Number(el.dataset.startX)) * 1.2;
            el.scrollLeft = Number(el.dataset.scrollLeft) - walk;
          }}
          onMouseUp={e => { e.currentTarget.style.cursor = 'grab'; e.currentTarget.dataset.dragging = 'false'; }}
          onMouseLeave={e => { e.currentTarget.style.cursor = 'grab'; e.currentTarget.dataset.dragging = 'false'; }}
        >
          {siteData.services.map(service => (
            <ServiceCard key={service.id} service={service} onRequestClick={handleRequest} />
          ))}
        </div>

        {/* Footnote */}
        <Reveal delay={0.2}>
          <p style={{ marginTop: '1.5rem', color: 'var(--muted)', fontSize: '0.875rem', textAlign: 'center' }}>
            {siteData.servicesFootnote}{' '}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontFamily: 'inherit', fontSize: 'inherit' }}
            >
              Get in touch →
            </button>
          </p>
        </Reveal>
      </div>

      <style>{`
        .services-scroll::-webkit-scrollbar { height: 4px; }
        .services-scroll::-webkit-scrollbar-track { background: transparent; }
        .services-scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 99px; }
        .services-scroll { scrollbar-width: thin; scrollbar-color: var(--border) transparent; }
      `}</style>
    </section>
  );
}
