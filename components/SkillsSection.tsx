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
        <h2 className="text-accent center">02. _SKILLS_AND_STACK</h2>
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="skill-category">
              <div className="category-header">
                <span className="category-line"></span>
                <h3>{category.toUpperCase()}</h3>
                <span className="category-line"></span>
              </div>
              <div className="skill-tags">
                {items.map(skill => (
                  <div key={skill} className="skill-item">
                    <span className="skill-tag">{skill}</span>
                    <div className="skill-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .center {
          text-align: center;
          margin-bottom: 4rem;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 4rem;
          margin-top: 2rem;
        }
        .skill-category {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .category-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 2rem;
          width: 100%;
        }
        .category-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(189, 255, 144, 0.3), transparent);
        }
        h3 {
          color: #fff;
          font-size: 1.2rem;
          letter-spacing: 4px;
          margin: 0;
          text-shadow: 0 0 10px rgba(189, 255, 144, 0.3);
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
        .skill-item {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .skill-item:hover {
          transform: translateY(-5px) scale(1.05);
        }
        .skill-tag {
          display: block;
          padding: 0.7rem 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(189, 255, 144, 0.1);
          color: #ccc;
          font-size: 0.9rem;
          font-family: 'Courier New', monospace;
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }
        .skill-item:hover .skill-tag {
          border-color: var(--accent);
          color: #fff;
          background: rgba(189, 255, 144, 0.1);
          box-shadow: 0 0 20px rgba(189, 255, 144, 0.2);
        }
        .skill-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(189, 255, 144, 0.2), transparent);
          transition: left 0.5s ease;
        }
        .skill-item:hover .skill-glow {
          left: 100%;
        }
        @media (max-width: 768px) {
          .skills-grid {
            gap: 3rem;
          }
          h3 {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
