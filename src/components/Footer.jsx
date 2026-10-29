import { MessageCircle, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons';
import { siteData } from '../data/siteData';

export default function Footer() {
  const year = new Date().getFullYear();
  const waNumber = siteData.whatsapp.replace(/\D/g, '');

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      role="contentinfo"
      style={{
        padding: '3rem 0 2rem',
        borderTop: '1px solid var(--nav-border)',
        background: 'var(--nav-bg)',
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

        {/* Top row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '1.5rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--nav-text)',
              marginBottom: '0.35rem',
            }}>
              {siteData.name}<span style={{ color: 'rgba(255,255,255,0.45)' }}>.</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--nav-muted)', maxWidth: '30ch' }}>
              {siteData.footerTagline}
            </p>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
            {[
              { href: siteData.github,              Icon: GithubIcon,    label: 'GitHub'   },
              { href: siteData.linkedin,             Icon: LinkedinIcon,  label: 'LinkedIn' },
              { href: `https://wa.me/${waNumber}`,  Icon: MessageCircle, label: 'WhatsApp' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36, borderRadius: 8,
                  border: '1px solid var(--nav-border)',
                  color: 'var(--nav-muted)',
                  transition: 'color .2s, background .2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--nav-text)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--nav-muted)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid var(--nav-border)' }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--nav-muted)' }}>
            © {year} {siteData.name}. All rights reserved.
          </span>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.8rem', fontWeight: 500,
              color: 'var(--nav-muted)',
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'color .2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--nav-text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--nav-muted)'}
          >
            Back to top <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
