import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Reveal — wraps children in a fade-up scroll animation.
 * Respects prefers-reduced-motion via Framer Motion's built-in support.
 *
 * @param {React.ReactNode} children
 * @param {number} delay   - stagger delay in seconds
 * @param {string} className
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
