import { useState, useEffect, useRef } from 'react';

/**
 * Tracks which section is currently in view so the Navbar
 * can highlight the active link.
 *
 * @param {string[]} sectionIds  - Array of section element IDs
 * @param {object}   options     - IntersectionObserver options
 * @returns {string}             - The ID of the active section
 */
export function useScrollSpy(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState('');
  const observerRef = useRef(null);

  useEffect(() => {
    const { rootMargin = '-30% 0px -60% 0px', threshold = 0 } = options;

    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, { rootMargin, threshold });

    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionIds]); // eslint-disable-line react-hooks/exhaustive-deps

  return activeId;
}
