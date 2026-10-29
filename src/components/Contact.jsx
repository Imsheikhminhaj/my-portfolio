import { useState, useEffect } from 'react';
import { MessageCircle, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons';
import { siteData } from '../data/siteData';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

const PROJECT_TYPES = [
  'Starter Site',
  'Business Site',
  'Custom Web App',
  'Something else',
];
const BUDGETS = [
  'Under ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000+',
  'Not sure yet',
];

function ContactInfo() {
  const waNumber = siteData.whatsapp.replace(/\D/g, '');
  const waMsg    = encodeURIComponent("Hi Minhaj! I'd like to discuss a project.");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${waNumber}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          padding: '1.1rem 1.25rem',
          background: '#25D36610',
          border: '1px solid #25D36640',
          borderRadius: 12,
          color: '#25D366',
          fontWeight: 600, fontSize: '0.9rem',
          transition: 'background .2s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#25D36620'}
        onMouseLeave={e => e.currentTarget.style.background = '#25D36610'}
      >
        <MessageCircle size={20} />
        <div>
          <div>Chat on WhatsApp</div>
          <div style={{ fontSize: '0.78rem', fontWeight: 400, opacity: 0.8, marginTop: 2 }}>
            {siteData.whatsapp.startsWith('+91TODO') ? 'TODO: add phone number' : siteData.whatsapp}
          </div>
        </div>
      </a>

      {/* Email */}
      <a
        href={`mailto:${siteData.email}`}
        style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          padding: '1.1rem 1.25rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          color: 'var(--text)',
          fontWeight: 600, fontSize: '0.9rem',
          transition: 'background .2s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--border)'}
        onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}
      >
        <Mail size={20} style={{ color: 'var(--accent)' }} />
        <div>
          <div>Send an email</div>
          <div style={{ fontSize: '0.78rem', fontWeight: 400, color: 'var(--muted)', marginTop: 2 }}>
            {siteData.email}
          </div>
        </div>
      </a>

      {/* Social links */}
      <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.25rem' }}>
        {[
          { href: siteData.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
          { href: siteData.github,   Icon: GithubIcon,   label: 'GitHub'   },
        ].map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '8px 14px', borderRadius: 8,
              border: '1px solid var(--border)',
              color: 'var(--muted)',
              fontSize: '0.85rem', fontWeight: 500,
              transition: 'color .2s, border-color .2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--muted)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
          >
            <Icon size={15} /> {label}
          </a>
        ))}
      </div>

      {/* Response time */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        fontSize: '0.82rem', color: 'var(--muted)',
        paddingTop: '0.25rem',
      }}>
        <Clock size={14} />
        Typical response within 4 hours during business hours
      </div>
    </div>
  );
}

export default function Contact({ initialProjectType = '' }) {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    projectType: initialProjectType,
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  // Sync when parent pre-fills the project type (from Services section)
  useEffect(() => {
    if (initialProjectType) {
      setForm(f => ({ ...f, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  const validate = () => {
    const e = {};
    if (!form.name.trim())     e.name    = 'Name is required.';
    if (!form.contact.trim())  e.contact = 'Email or phone is required.';
    if (!form.message.trim())  e.message = 'Please describe your project.';
    return e;
  };

  const handleChange = (field, value) => {
    setForm(f => ({ ...f, [field]: value }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('loading');
    try {
      const res = await fetch(siteData.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', contact: '', projectType: '', budget: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '10px 14px',
    background: 'var(--bg)',
    border: `1px solid ${hasError ? '#EF4444' : 'var(--border)'}`,
    borderRadius: 8,
    color: 'var(--text)',
    fontSize: '0.9rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color .2s ease',
  });

  const labelStyle = {
    display: 'block',
    fontSize: '0.82rem',
    fontWeight: 600,
    color: 'var(--muted)',
    marginBottom: '0.4rem',
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Contact"
            title="Let's build your website."
            subtitle="Tell me about your business and I'll get back to you within a few hours."
          />
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
        }}
          className="contact-grid"
        >
          {/* Form */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
            >
              {/* Name */}
              <div>
                <label htmlFor="contact-name" style={labelStyle}>Your name *</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Rahul"
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                  style={inputStyle(errors.name)}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = errors.name ? '#EF4444' : 'var(--border)'}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                />
                {errors.name && <p id="contact-name-error" style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.25rem' }}>{errors.name}</p>}
              </div>

              {/* Contact */}
              <div>
                <label htmlFor="contact-contact" style={labelStyle}>Email or phone *</label>
                <input
                  id="contact-contact"
                  type="text"
                  placeholder="email@example.com or +91 98765 43210"
                  value={form.contact}
                  onChange={e => handleChange('contact', e.target.value)}
                  style={inputStyle(errors.contact)}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = errors.contact ? '#EF4444' : 'var(--border)'}
                  aria-invalid={!!errors.contact}
                  aria-describedby={errors.contact ? 'contact-contact-error' : undefined}
                />
                {errors.contact && <p id="contact-contact-error" style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.25rem' }}>{errors.contact}</p>}
              </div>

              {/* Project type */}
              <div>
                <label htmlFor="contact-project-type" style={labelStyle}>What do you need?</label>
                <select
                  id="contact-project-type"
                  value={form.projectType}
                  onChange={e => handleChange('projectType', e.target.value)}
                  style={{ ...inputStyle(false), cursor: 'pointer' }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                >
                  <option value="">Select a project type</option>
                  {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="contact-budget" style={labelStyle}>Budget range</label>
                <select
                  id="contact-budget"
                  value={form.budget}
                  onChange={e => handleChange('budget', e.target.value)}
                  style={{ ...inputStyle(false), cursor: 'pointer' }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                >
                  <option value="">Select a budget range</option>
                  {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" style={labelStyle}>Tell me about your project *</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="What does your business do? What would you like the website to do for you?"
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  style={{ ...inputStyle(errors.message), resize: 'vertical', lineHeight: 1.6 }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = errors.message ? '#EF4444' : 'var(--border)'}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                />
                {errors.message && <p id="contact-message-error" style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.25rem' }}>{errors.message}</p>}
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '12px 16px', borderRadius: 8,
                  background: '#22c55e15', border: '1px solid #22c55e40',
                  color: '#16a34a', fontSize: '0.875rem', fontWeight: 500,
                }}>
                  <CheckCircle size={16} /> Message sent! I'll get back to you within a few hours.
                </div>
              )}
              {status === 'error' && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '12px 16px', borderRadius: 8,
                  background: '#EF444415', border: '1px solid #EF444440',
                  color: '#dc2626', fontSize: '0.875rem', fontWeight: 500,
                }}>
                  <AlertCircle size={16} /> Something went wrong. Try WhatsApp or email directly.
                </div>
              )}

              <Button
                type="submit"
                disabled={status === 'loading'}
                style={{ alignSelf: 'flex-start', gap: '0.5rem' }}
              >
                {status === 'loading' ? 'Sending…' : <><Send size={15} /> Send message</>}
              </Button>
            </form>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={0.1}>
            <ContactInfo />
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
