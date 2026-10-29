import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './ui/BrandIcons';
import { siteData } from '../data/siteData';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <article
      style={{
        flex: '0 0 300px',
        width: 300,
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: 12,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        boxShadow: 'var(--glass-shadow)',
        transition: 'box-shadow .25s ease, transform .25s ease',
        scrollSnapAlign: 'start',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = 'var(--glass-shadow), 0 0 0 1px var(--glass-border)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Image / placeholder */}
      <div style={{
        aspectRatio: '16/9',
        background: `linear-gradient(135deg,
          ${isEven ? 'rgba(1,75,170,0.08)' : 'rgba(1,75,170,0.14)'} 0%,
          ${isEven ? 'rgba(1,75,170,0.18)' : 'rgba(1,75,170,0.25)'} 100%)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid var(--glass-border)',
        position: 'relative',
        flexShrink: 0,
      }}>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--accent)',
              opacity: 0.7,
              textAlign: 'center',
              padding: '0 1rem',
            }}>
              {project.title}
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.35rem' }}>
              Screenshot coming soon
            </span>
          </>
        )}
        {project.concept && (
          <span style={{
            position: 'absolute', top: 10, right: 10,
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: 999,
            fontSize: '0.68rem', fontWeight: 600,
            padding: '2px 9px',
            color: 'var(--muted)',
          }}>
            Concept
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.1rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '0.55rem' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.2 }}>
          {project.title}
        </h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.8rem', lineHeight: 1.6, flexGrow: 1 }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.2rem' }}>
          {project.liveUrl && !project.liveUrl.startsWith('TODO') && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent)', border: '1px solid var(--accent)', borderRadius: 999, padding: '3px 10px', transition: 'background .15s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)18'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            ><ExternalLink size={11} /> Live</a>
          )}
          {project.githubUrl && !project.githubUrl.startsWith('TODO') && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '0.78rem', fontWeight: 600, color: 'var(--muted)', border: '1px solid var(--border)', borderRadius: 999, padding: '3px 10px', transition: 'background .15s, color .15s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--muted)'; }}
            ><GithubIcon size={11} /> GitHub</a>
          )}
          {(project.liveUrl?.startsWith('TODO') && project.githubUrl?.startsWith('TODO')) && (
            <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>Links coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Work"
            title="Selected Projects"
            subtitle="Real builds and concept demos showing what's possible for your business."
          />
        </Reveal>

        {/* Scroll hint */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Scroll to see all projects →</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)', opacity: 0.7 }}>{siteData.projects.length} projects</span>
        </div>

        {/* Horizontal scroll track — inside container so it stays centered */}
        <div
          className="projects-scroll"
          style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            overflowY: 'visible',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '0.75rem',
            cursor: 'grab',
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
          {siteData.projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .projects-scroll::-webkit-scrollbar { height: 4px; }
        .projects-scroll::-webkit-scrollbar-track { background: transparent; }
        .projects-scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 99px; }
        .projects-scroll { scrollbar-width: thin; scrollbar-color: var(--border) transparent; }
      `}</style>
    </section>
  );
}
