import { MessageCircle, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { siteData } from '../data/siteData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const whatsappNumber = siteData.whatsapp.replace(/\D/g, '');
  const waMsg = encodeURIComponent(
    "Hi Minhaj! I saw your portfolio and I'd love to discuss a project."
  );

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      aria-label="Hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          opacity: 0.04,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 760 }}>

          {/* Availability badge */}
          <motion.div {...fadeUp(0)} style={{ marginBottom: '1.5rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: 'var(--muted)',
              border: '1px solid var(--border)',
              borderRadius: 999,
              padding: '5px 12px',
              background: 'var(--surface)',
            }}>
              <span className="dot-available" />
              {siteData.availabilityText}
            </span>
          </motion.div>

          {/* Tag line */}
          <motion.p {...fadeUp(0.05)} style={{
            fontSize: '0.82rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '0.75rem',
          }}>
            {siteData.tagline}
          </motion.p>

          {/* H1 headline */}
          <motion.h1 {...fadeUp(0.1)} style={{
            fontSize: 'clamp(2.1rem, 6vw, 4.25rem)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            color: 'var(--text)',
            marginBottom: '1.25rem',
            maxWidth: '14em',
          }}>
            {siteData.headline}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p {...fadeUp(0.15)} style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'var(--muted)',
            lineHeight: 1.7,
            marginBottom: '2rem',
            maxWidth: '52ch',
          }}>
            {siteData.subHeadline}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.2)} style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            alignItems: 'center',
            marginBottom: '2.5rem',
          }}>
            <Button onClick={() => scrollTo('contact')}>
              Get a free quote <ArrowRight size={16} />
            </Button>
            <Button variant="secondary" onClick={() => scrollTo('projects')}>
              View my work
            </Button>

            {/* WhatsApp — solid filled pill, same height as other buttons */}
            <a
              href={`https://wa.me/${8539827705}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                height: 44,
                padding: '0 1.4rem',
                borderRadius: 999,
                background: '#25D366',
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.9rem',
                fontFamily: 'inherit',
                textDecoration: 'none',
                border: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 10px rgba(37,211,102,.30)',
                transition: 'background .18s ease, transform .15s ease, box-shadow .18s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#1dbb58';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,211,102,.42)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#25D366';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(37,211,102,.30)';
              }}
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div {...fadeUp(0.25)} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>Find me on</span>

            {[
              { href: siteData.github,   Icon: GithubIcon,   label: 'GitHub'   },
              { href: siteData.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36, height: 36,
                  borderRadius: 8,
                  border: '1px solid var(--border)',
                  color: 'var(--muted)',
                  transition: 'color .2s ease, border-color .2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--muted)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
