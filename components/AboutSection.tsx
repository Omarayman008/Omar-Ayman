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

const AboutSection: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="text-accent">01. _ABOUT_ME</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am <span className="text-accent">Omar Ayman</span>, a versatile Full-Stack developer dedicated to transforming complex ideas into seamless digital experiences.
            </p>
            <p>
              From building sophisticated Discord bots and AI-driven automation systems to high-performance web applications, I handle the entire lifecycle from <span className="text-accent">idea to deployment</span>.
            </p>
            <p>
              My approach is technical, minimal, and performance-first. Founder of a next-generation digital agency.
            </p>
          </div>
          
          <div className="expertise-list">
            <h4 className="expertise-title">// CORE_EXPERTISE</h4>
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
      </div>
      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
          align-items: start;
        }
        .about-text {
          line-height: 1.8;
          font-size: 1.2rem;
        }
        .expertise-list {
          background: rgba(255, 255, 255, 0.02);
          padding: 2rem;
          border-left: 2px solid var(--accent);
        }
        .expertise-title {
          font-size: 0.8rem;
          color: #666;
          letter-spacing: 5px;
          margin-bottom: 1.5rem;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 1rem;
          font-size: 0.95rem;
          color: #ccc;
        }
        .bullet {
          color: var(--accent);
          font-family: 'Courier New', monospace;
          font-weight: bold;
          font-size: 0.8rem;
        }
        p {
          margin-bottom: 1.5rem;
        }
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
