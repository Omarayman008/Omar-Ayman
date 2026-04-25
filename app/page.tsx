'use client';

import React, { useState, useEffect } from 'react';
import GlitchName from '../components/GlitchName';
import DinoGame from '../components/DinoGame';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import ProjectsSection from '../components/ProjectsSection';
import AdminPanel from '../components/AdminPanel';

interface Project {
  name: string;
  tech: string;
  description: string;
  link: string;
  level: number;
  color: string;
  biomeColor?: string;
  characterType?: 'rex' | 'pterodactyl' | 'anky' | 'triceratops' | 'spinosaurus';
}

const DEFAULT_PROJECTS: Project[] = [
  {
    name: "Fluxer.Java",
    tech: "Java / Maven",
    description: "High-performance administrative framework for Java applications with advanced automation features.",
    link: "https://github.com/Omarayman008/fluxer.java",
    level: 1,
    color: "#bdff90",
    biomeColor: "#0a0f0a",
    characterType: 'rex'
  },
  {
    name: "Social-Media API",
    tech: "Node.js / Express",
    description: "A scalable backend for social platforms featuring ffmpeg video processing and containerized deployment.",
    link: "https://github.com/Omarayman008/Social-Media",
    level: 2,
    color: "#00fff9",
    biomeColor: "#050a10",
    characterType: 'pterodactyl'
  },
  {
    name: "Commander Bot",
    tech: "Java / JDA",
    description: "Advanced Discord management system with auto-moderation, custom rank engine, and leveling system.",
    link: "https://github.com/Omarayman008/commander-bot",
    level: 3,
    color: "#ff00c1",
    biomeColor: "#10050f",
    characterType: 'anky'
  }
];

export default function Home() {
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);

  useEffect(() => {
    const saved = localStorage.getItem('omar_projects');
    if (saved) {
      setProjects(JSON.parse(saved));
    }
  }, []);

  const saveProjects = (updated: Project[]) => {
    setProjects(updated);
    localStorage.setItem('omar_projects', JSON.stringify(updated));
  };

  const handleAddProject = (newProject: Project) => {
    saveProjects([...projects, newProject]);
  };

  const handleDeleteProject = (index: number) => {
    if (window.confirm("ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_DATA?")) {
      const updated = projects.filter((_, i) => i !== index);
      saveProjects(updated);
    }
  };

  const handleUpdateProject = (index: number, updatedProject: Project) => {
    const updated = [...projects];
    updated[index] = updatedProject;
    saveProjects(updated);
  };

  return (
    <main>
      <AdminPanel 
        projects={projects} 
        onAddProject={handleAddProject} 
        onDeleteProject={handleDeleteProject}
        onUpdateProject={handleUpdateProject}
      />

      <section className="section hero">
        <div className="container">
          <GlitchName name="OMAR AYMAN" />
          <p className="tagline">"From idea to deployment — I handle it all"</p>
          
          <div className="game-wrapper">
            <div className="game-header">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="game-title">PROJECT_RUNNER_v1.0</span>
            </div>
            <DinoGame projects={projects} />
            <div className="game-footer">
              <p>[SPACE/ALT] to restart</p>
              <p>RUN TO REVEAL PROJECTS</p>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <ContactSection />

      <style jsx>{`
        .hero {
          text-align: center;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tagline {
          font-style: italic;
          color: #fff;
          font-size: 1.5rem;
          margin-bottom: 4rem;
        }
        .game-wrapper {
          margin-top: 2rem;
          background: #1a1a1a;
          border-radius: 8px 8px 0 0;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .game-header {
          background: #333;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #555;
        }
        .game-title {
          margin-left: auto;
          font-size: 0.8rem;
          color: #888;
        }
        .game-footer {
          background: #000;
          padding: 15px;
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #555;
        }
        @media (max-width: 768px) {
          .tagline {
            font-size: 1rem;
          }
        }
      `}</style>
    </main>
  );
}
