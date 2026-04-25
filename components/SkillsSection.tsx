'use client';

import React from 'react';

const EXPERTISE = [
  "Core Backend & System Architecture Expert",
  "Professional Web UI/UX Designer",
  "Hardware Interaction Specialist",
  "Windows OS & Unity Engine Expert",
  "AI Programming & Advanced Automation",
  "Server Infrastructure & JDA Framework",
  "Data Formatting & Visualization Master"
];

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
    items: ["Docker", "Redis", "Git", "Supabase", "SQL", "Maven", "Unity Engine", "Windows Expert"],
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

        <div className="expertise-wrapper">
          <div className="expertise-list">
            <h4 className="expertise-title">// CORE_EXPERTISE_SUMMARY</h4>
            <ul>
              {EXPERTISE.map((point, i) => (
                <li key={i}>
                  <span className="bullet">0{i+1}</span>
                  <span className="text">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="skills-stack">
          {SKILLS_CATEGORIES.map((cat, index) => (
            <div key={index} className="skill-category-full">
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
      </div>
      <style jsx>{`
        .center {
          text-align: center;
          margin-bottom: 2rem;
        }
        .expertise-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 6rem;
        }
        .expertise-list {
          background: rgba(189, 255, 144, 0.02);
          padding: 2.5rem;
          border: 1px solid rgba(189, 255, 144, 0.1);
          max-width: 800px;
          width: 100%;
        }
        .expertise-title {
          font-size: 0.8rem;
          color: #666;
          letter-spacing: 5px;
          margin-bottom: 2rem;
          text-align: center;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem 3rem;
        }
        li {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 0.9rem;
          color: #ccc;
        }
        .bullet {
          color: var(--accent);
          font-family: 'Courier New', monospace;
          font-weight: bold;
          font-size: 0.8rem;
        }
        .skills-stack {
          display: flex;
          flex-direction: column;
          gap: 6rem;
          width: 100%;
        }
        .skill-category-full {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .category-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 1rem;
          width: 100%;
          max-width: 1000px;
        }
        .category-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(189, 255, 144, 0.4), transparent);
        }
        .category-desc {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 2.5rem;
          text-align: center;
          font-style: italic;
          max-width: 600px;
        }
        h3 {
          color: #fff;
          font-size: 1.4rem;
          letter-spacing: 5px;
          margin: 0;
          white-space: nowrap;
          text-shadow: 0 0 15px rgba(189, 255, 144, 0.2);
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1.2rem;
          justify-content: center;
          max-width: 900px;
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
          padding: 0.8rem 1.8rem;
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
        .concepts-section {
          margin-top: 8rem;
          text-align: center;
          background: rgba(189, 255, 144, 0.02);
          padding: 3rem;
          border: 1px dashed rgba(189, 255, 144, 0.1);
        }
        .concepts-title {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 2.5rem;
          letter-spacing: 6px;
        }
        .concepts-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
        }
        .concept-tag {
          color: #888;
          font-size: 0.9rem;
          transition: all 0.3s;
          cursor: default;
        }
        .concept-tag:hover {
          color: var(--accent);
          text-shadow: 0 0 10px var(--accent);
        }
        @media (max-width: 768px) {
          ul {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .category-header {
            gap: 10px;
          }
          h3 {
            font-size: 1rem;
            letter-spacing: 2px;
          }
          .skill-tag {
            padding: 0.6rem 1.2rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
