import { Sun, Moon } from 'lucide-react';

/**
 * ThemeToggle — icon button that switches between light and dark.
 * Passes aria-label for accessibility.
 */
export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 38,
        height: 38,
        borderRadius: 8,
        border: '1px solid var(--nav-border)',
        background: 'transparent',
        color: 'var(--nav-muted)',
        cursor: 'pointer',
        transition: 'background .2s ease, color .2s ease',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
        e.currentTarget.style.color = 'var(--nav-text)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--nav-muted)';
      }}
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
