'use client';

import React from 'react';

const SKILLS = {
  backend: ["Node.js", "Python", "Java", "C++", "C#", "TypeScript"],
  frontend: ["Next.js", "Three.js", "WebGL", "Tailwind", "React"],
  automation: ["JDA", "Discord.js", "Aiogram", "AI/LLMs", "Pydantic"],
  devops: ["Docker", "Redis", "Git", "Supabase", "SQL", "Maven"]
};

const SkillsSection: React.FC = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="text-accent">02. _SKILLS_AND_STACK</h2>
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3>{category.toUpperCase()}</h3>
              <div className="skill-tags">
                {items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        <div className="jitpack-integration">
          <div className="jitpack-card">
            <div className="jitpack-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
            </div>
            <div className="jitpack-info">
              <span className="jitpack-label">JITPACK_REGISTRY</span>
              <h4 className="jitpack-title">fluxer.java</h4>
            </div>
            <a href="https://jitpack.io/#Omarayman008/fluxer.java" target="_blank" rel="noopener noreferrer" className="jitpack-link">
              DEPLOY_VIEW
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-top: 3rem;
        }
        h3 {
          margin-bottom: 1.5rem;
          color: #fff;
          border-left: 3px solid var(--accent);
          padding-left: 10px;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        .skill-tag {
          padding: 0.5rem 1rem;
          background: rgba(189, 255, 144, 0.05);
          border: 1px solid rgba(189, 255, 144, 0.2);
          color: var(--foreground);
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        .skill-tag:hover {
          background: var(--accent);
          color: var(--background);
          box-shadow: 0 0 10px var(--accent);
        }
        .jitpack-integration {
          margin-top: 5rem;
          display: flex;
          justify-content: center;
        }
        .jitpack-card {
          background: rgba(189, 255, 144, 0.02);
          border: 1px solid rgba(189, 255, 144, 0.1);
          padding: 1.5rem 3rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .jitpack-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(189, 255, 144, 0.05), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        .jitpack-card:hover {
          border-color: var(--accent);
          background: rgba(189, 255, 144, 0.05);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .jitpack-card:hover::before {
          transform: translateX(100%);
        }
        .jitpack-icon {
          width: 40px;
          height: 40px;
          color: var(--accent);
        }
        .jitpack-info {
          display: flex;
          flex-direction: column;
        }
        .jitpack-label {
          font-size: 0.65rem;
          color: #666;
          letter-spacing: 3px;
        }
        .jitpack-title {
          font-size: 1.5rem;
          color: #fff;
          margin: 0;
          font-family: 'Courier New', monospace;
        }
        .jitpack-link {
          margin-left: 2rem;
          padding: 8px 20px;
          border: 1px solid var(--accent);
          color: var(--accent);
          font-size: 0.8rem;
          letter-spacing: 2px;
          font-weight: bold;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .jitpack-link:hover {
          background: var(--accent);
          color: #000;
        }
        @media (max-width: 768px) {
          .jitpack-card {
            flex-direction: column;
            padding: 2rem;
            text-align: center;
            gap: 1rem;
          }
          .jitpack-link {
            margin-left: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
