'use client';

import React from 'react';

interface Project {
  name: string;
  tech: string;
  description: string;
  link: string;
  color: string;
}

const ProjectsSection: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <section className="section" id="projects-grid">
      <div className="container">
        <h2 className="text-accent">02.5 _PROJECT_ARCHIVE</h2>
        <div className="projects-display-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card-premium" style={{ '--accent-color': project.color } as any}>
              <div className="card-border"></div>
              <div className="card-content">
                <div className="project-header">
                  <span className="project-id">PROJ_0{index + 1}</span>
                  <div className="status-indicator"></div>
                </div>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-desc">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>INITIATE_VIEW</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .projects-display-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .project-card-premium {
          position: relative;
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
          height: 350px;
          transition: all 0.4s ease;
          overflow: hidden;
        }
        .card-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 0;
          background: var(--accent-color);
          transition: height 0.4s ease;
        }
        .project-card-premium:hover {
          transform: translateY(-10px);
          background: rgba(25, 25, 25, 0.9);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        .project-card-premium:hover .card-border {
          height: 100%;
        }
        .card-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .project-id {
          font-size: 0.7rem;
          color: var(--accent-color);
          letter-spacing: 2px;
          font-weight: bold;
        }
        .status-indicator {
          width: 8px;
          height: 8px;
          background: var(--accent-color);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-color);
        }
        .project-title {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }
        .project-tech {
          font-size: 0.8rem;
          color: #666;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }
        .project-desc {
          font-size: 0.95rem;
          color: #aaa;
          line-height: 1.6;
          margin-bottom: auto;
          white-space: pre-wrap;
        }
        .project-link {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--accent-color);
          font-weight: bold;
          font-size: 0.8rem;
          letter-spacing: 1px;
          margin-top: 1.5rem;
          transition: gap 0.3s ease;
        }
        .project-link:hover {
          gap: 15px;
        }
        .project-link svg {
          width: 16px;
          height: 16px;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
