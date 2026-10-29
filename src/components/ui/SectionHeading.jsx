/**
 * SectionHeading — renders a small accent label above a big title.
 *
 * Usage:
 *   <SectionHeading label="Work" title="Selected Projects" />
 *   <SectionHeading label="Work" title="Selected Projects" center />
 */
export default function SectionHeading({ label, title, subtitle, center = false }) {
  return (
    <div className={center ? 'text-center' : ''} style={{ marginBottom: '3rem' }}>
      {label && (
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '0.5rem',
          }}
        >
          {label}
        </span>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
          fontWeight: 700,
          lineHeight: 1.15,
          color: 'var(--text)',
          maxWidth: center ? '100%' : '560px',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: '0.75rem',
            color: 'var(--muted)',
            maxWidth: '520px',
            lineHeight: 1.65,
            marginInline: center ? 'auto' : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
