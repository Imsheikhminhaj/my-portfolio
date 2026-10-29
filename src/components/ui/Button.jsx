import { forwardRef } from 'react';

/**
 * Button — primary (solid navy) or secondary (outline).
 * Pill-shaped, consistent height, works as <button> or <a>.
 */
const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',  // 'primary' | 'secondary'
    as: Tag = 'button',
    className = '',
    style = {},
    ...props
  },
  ref
) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.45rem',
    fontFamily: 'inherit',
    fontWeight: 600,
    fontSize: '0.9rem',
    padding: '0 1.4rem',
    height: 44,
    borderRadius: 999,
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background .18s ease, border-color .18s ease, transform .15s ease, box-shadow .18s ease',
    userSelect: 'none',
    outline: 'none',
  };

  const variants = {
    primary: {
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      boxShadow: '0 2px 10px rgba(1,75,170,.28)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text)',
      border: '1.5px solid var(--border)',
      boxShadow: 'none',
    },
  };

  const hoverHandlers =
    variant === 'primary'
      ? {
          onMouseEnter: e => {
            e.currentTarget.style.background = 'var(--accent-hover)';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 4px 18px rgba(1,75,170,.38)';
          },
          onMouseLeave: e => {
            e.currentTarget.style.background = 'var(--accent)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(1,75,170,.28)';
          },
          onMouseDown:  e => { e.currentTarget.style.transform = 'scale(.97)'; },
          onMouseUp:    e => { e.currentTarget.style.transform = 'translateY(-1px)'; },
        }
      : {
          onMouseEnter: e => {
            e.currentTarget.style.background = 'var(--surface)';
            e.currentTarget.style.borderColor = 'var(--muted)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          },
          onMouseLeave: e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.transform = 'translateY(0)';
          },
          onMouseDown:  e => { e.currentTarget.style.transform = 'scale(.97)'; },
          onMouseUp:    e => { e.currentTarget.style.transform = 'translateY(-1px)'; },
        };

  return (
    <Tag
      ref={ref}
      style={{ ...base, ...variants[variant], ...style }}
      {...hoverHandlers}
      {...props}
    >
      {children}
    </Tag>
  );
});

export default Button;
