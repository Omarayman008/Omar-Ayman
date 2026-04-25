'use client';

import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="text-accent">01. _ABOUT_ME</h2>
        <div className="about-content">
          <p>
            I am <span className="text-accent">Omar Ayman</span>, a versatile Full-Stack developer dedicated to transforming complex ideas into seamless digital experiences.
          </p>
          <p>
            From building sophisticated Discord bots and advanced automation systems to high-performance web applications, I handle the entire lifecycle from <span className="text-accent">idea to deployment</span>.
          </p>
          <p>
            My approach is technical, minimal, and performance-first. Founder of a next-generation digital agency.
          </p>
        </div>
      </div>
      <style jsx>{`
        .about-content {
          margin-top: 2rem;
          line-height: 1.8;
          font-size: 1.2rem;
          max-width: 800px;
        }
        p {
          margin-bottom: 1.5rem;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
