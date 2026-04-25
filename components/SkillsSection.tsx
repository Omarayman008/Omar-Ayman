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
      `}</style>
    </section>
  );
};

export default SkillsSection;
