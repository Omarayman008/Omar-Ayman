'use client';

import React from 'react';

const SKILLS_CATEGORIES = [
  {
    title: "Core Development",
    items: ["Node.js", "Python", "Java", "C++", "C#", "Next.js", "Tailwind CSS", "Architecture"],
    description: "Full-cycle engineering from high-level architecture to clean implementation."
  },
  {
    title: "AI & Automation",
    items: ["JDA", "Discord.js", "Aiogram", "AI/LLM Integration", "Automated Workflows"],
    description: "Crafting intelligent systems and sophisticated bot infrastructures."
  },
  {
    title: "Systems & DevOps",
    items: ["Docker", "Maven", "Git", "Unity Engine", "Windows Expert", "Hardware Management"],
    description: "Managing operational environments and low-level system interactions."
  },
  {
    title: "Data & Graphics",
    items: ["SQL", "Redis", "Supabase", "WebGL", "Three.js", "JSON/Base64", "Chart.js"],
    description: "Data visualization and complex data processing with premium graphics."
  }
];

const CONCEPTS = [
  "Three.js Ecosystem", "TWEEN.js Animation", "Dat.GUI Controls", "FontLoader/TextGeometry", "Base64 Encoding", "JSON Structures"
];

const SkillsSection: React.FC = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="text-accent center">02. _SKILLS_AND_STACK</h2>
        
        <div className="skills-grid">
          {SKILLS_CATEGORIES.map((cat, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-line"></span>
                <h3>{cat.title.toUpperCase()}</h3>
                <span className="category-line"></span>
              </div>
              <p className="category-desc">{cat.description}</p>
              <div className="skill-tags">
                {cat.items.map(skill => (
                  <div key={skill} className="skill-item">
                    <span className="skill-tag">{skill}</span>
                    <div className="skill-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="concepts-section">
          <h4 className="concepts-title">// ADVANCED_CONCEPTS_&_LIBRARIES</h4>
          <div className="concepts-tags">
            {CONCEPTS.map(concept => (
              <span key={concept} className="concept-tag">{concept}</span>
            ))}
          </div>
        </div>

        <div className="jitpack-integration">
          <a href="https://jitpack.io/#Omarayman008/fluxer.java" target="_blank" rel="noopener noreferrer" className="jitpack-card">
            <div className="jitpack-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
            </div>
            <div className="jitpack-info">
              <span className="jitpack-label">JITPACK_REGISTRY</span>
              <h4 className="jitpack-title">fluxer.java</h4>
            </div>
          </a>
        </div>
      </div>
      <style jsx>{`
        .center {
          text-align: center;
          margin-bottom: 4rem;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 4rem;
          margin-top: 2rem;
        }
        .skill-category {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: border-color 0.3s;
        }
        .skill-category:hover {
          border-color: rgba(189, 255, 144, 0.2);
        }
        .category-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 1rem;
          width: 100%;
        }
        .category-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(189, 255, 144, 0.3), transparent);
        }
        .category-desc {
          font-size: 0.8rem;
          color: #666;
          margin-bottom: 2rem;
          text-align: center;
          font-style: italic;
        }
        h3 {
          color: #fff;
          font-size: 1.1rem;
          letter-spacing: 3px;
          margin: 0;
          white-space: nowrap;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          justify-content: center;
        }
        .skill-item {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .skill-item:hover {
          transform: translateY(-3px) scale(1.02);
        }
        .skill-tag {
          display: block;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(189, 255, 144, 0.1);
          color: #ccc;
          font-size: 0.8rem;
          font-family: 'Courier New', monospace;
          position: relative;
          z-index: 1;
        }
        .skill-item:hover .skill-tag {
          border-color: var(--accent);
          color: #fff;
          background: rgba(189, 255, 144, 0.05);
        }
        .skill-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(189, 255, 144, 0.1), transparent);
          transition: left 0.5s ease;
        }
        .skill-item:hover .skill-glow {
          left: 100%;
        }
        .concepts-section {
          margin-top: 6rem;
          text-align: center;
          background: rgba(0,0,0,0.3);
          padding: 2rem;
          border: 1px dashed rgba(255,255,255,0.1);
        }
        .concepts-title {
          font-size: 0.9rem;
          color: #444;
          margin-bottom: 2rem;
          letter-spacing: 5px;
        }
        .concepts-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
        .concept-tag {
          color: #888;
          font-size: 0.85rem;
          border-bottom: 1px solid transparent;
          transition: all 0.3s;
        }
        .concept-tag:hover {
          color: var(--accent);
          border-bottom-color: var(--accent);
        }
        .jitpack-integration {
          margin-top: 5rem;
          display: flex;
          justify-content: center;
          padding-left: 40px;
        }
        .jitpack-card {
          background: rgba(189, 255, 144, 0.03);
          border: 1px solid rgba(189, 255, 144, 0.1);
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          text-decoration: none;
          transition: all 0.4s ease;
        }
        .jitpack-card:hover {
          border-color: var(--accent);
          background: rgba(189, 255, 144, 0.08);
          box-shadow: 0 0 30px rgba(189, 255, 144, 0.1);
        }
        .jitpack-icon {
          width: 30px;
          height: 30px;
          color: var(--accent);
        }
        .jitpack-info {
          display: flex;
          flex-direction: column;
        }
        .jitpack-label {
          font-size: 0.6rem;
          color: #666;
          letter-spacing: 2px;
        }
        .jitpack-title {
          font-size: 1.2rem;
          color: #fff;
          margin: 0;
          font-family: 'Courier New', monospace;
        }
        @media (max-width: 768px) {
          .skills-grid {
            gap: 3rem;
          }
          h3 {
            font-size: 1rem;
          }
          .jitpack-integration {
            padding-left: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
