'use client';

import React from 'react';

const CONTACTS = [
  { 
    label: "GitHub", 
    value: "github.com/Omarayman008", 
    link: "https://github.com/Omarayman008",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  },
  { 
    label: "LinkedIn", 
    value: "linkedin.com/in/omar-ayman-996783404", 
    link: "https://www.linkedin.com/in/omar-ayman-996783404",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
  },
  { 
    label: "Discord", 
    value: "agent_omar.dev", 
    link: "https://discord.com/users/agent_omar.dev",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.1c2.1-1.3 4.9-1.3 7 0 .2.1.4.3.5.5.4 1.1.7 2.3.8 3.5 0 1.2-.1 2.4-.4 3.5-.1.2-.2.4-.5.5-2.1 1.3-4.9 1.3-7 0-.3-.1-.4-.3-.5-.5-.3-1.1-.4-2.3-.4-3.5 0-1.2.1-2.4.4-3.5.1-.2.2-.4.6-.5Z"/><path d="M7.1 11.2s0-1.5 1.2-2.5c1.2-1 2.7-1.2 2.7-1.2"/><path d="M16.9 11.2s0-1.5-1.2-2.5c-1.2-1-2.7-1.2-2.7-1.2"/><path d="M9.5 17c0 0-1.1 0-2.1-1.1"/><path d="M14.5 17c0 0 1.1 0 2.1-1.1"/></svg>
  },
  { 
    label: "Email", 
    value: "omarsharq24@gmail.com", 
    link: "mailto:omarsharq24@gmail.com",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  },
  { 
    label: "JITPACK", 
    value: "fluxer.java", 
    link: "https://jitpack.io/#Omarayman008/fluxer.java",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
  },
  { 
    label: "FLUXER", 
    value: "Omar_Ayman#2566", 
    link: "#",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
  },
  { 
    label: "AGENCY", 
    value: "discord.gg/aWtPNFPTn", 
    link: "https://discord.gg/aWtPNFPTn",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    isLocked: true
  }
];

const ContactSection: React.FC = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="text-accent">03. _CONNECT_WITH_ME</h2>
        <div className="contact-list">
          {CONTACTS.map(contact => (
            <a key={contact.label} href={contact.isLocked ? '#' : contact.link} className={`contact-item ${contact.isLocked ? 'locked' : ''}`} target="_blank" rel="noopener noreferrer">
              <div className="icon-box text-accent">
                {contact.icon}
              </div>
              <div className="info-box">
                <span className="label">{contact.label}:</span>
                <span className="value">
                  {contact.isLocked ? (
                    <span className="locked-value">
                      discord.gg/aWtP<span className="blur-text">NFPTn</span>
                    </span>
                  ) : contact.value}
                </span>
              </div>
              {contact.isLocked ? (
                <span className="status-badge">LOCKED_ACCESS</span>
              ) : (
                <span className="arrow"> {'->'} </span>
              )}
            </a>
          ))}
        </div>
        <footer className="footer">
          <p>OMAR AYMAN // FROM IDEA TO DEPLOYMENT</p>
          <p>© 2026_ALL_SYSTEMS_OPERATIONAL</p>
        </footer>
      </div>
      <style jsx>{`
        .contact-list {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          padding: 1.5rem;
          background: rgba(26, 26, 26, 0.4);
          border: 1px solid rgba(189, 255, 144, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        .contact-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 0;
          background: var(--accent);
          opacity: 0.1;
          transition: width 0.3s ease;
          z-index: 0;
        }
        .contact-item:hover {
          border-color: var(--accent);
          transform: translateX(10px);
          box-shadow: -5px 5px 20px rgba(189, 255, 144, 0.1);
        }
        .contact-item:hover::before {
          width: 100%;
        }
        .icon-box {
          width: 40px;
          height: 40px;
          margin-right: 1.5rem;
          z-index: 1;
        }
        .icon-box :global(svg) {
          width: 100%;
          height: 100%;
        }
        .info-box {
          display: flex;
          flex-direction: column;
          z-index: 1;
        }
        .label {
          font-size: 0.8rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .value {
          font-size: 1.3rem;
          color: #fff;
          font-weight: bold;
        }
        .arrow {
          margin-left: auto;
          font-size: 1.5rem;
          color: var(--accent);
          opacity: 0;
          transform: translateX(-20px);
          transition: all 0.3s ease;
          z-index: 1;
        }
        .contact-item:hover .arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .blur-text {
          filter: blur(4px);
          user-select: none;
          color: #ff00ff;
          text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
          animation: glitch-flicker 0.2s infinite alternate;
          font-weight: bold;
        }
        @keyframes glitch-flicker {
          0% { opacity: 0.8; transform: skew(1deg); }
          50% { opacity: 0.4; transform: skew(-2deg); filter: blur(6px); }
          100% { opacity: 0.9; transform: skew(0deg); color: #00ffff; }
        }
        .status-badge {
          margin-left: auto;
          background: #ff4444;
          color: #fff;
          font-size: 0.7rem;
          padding: 4px 10px;
          border-radius: 2px;
          font-weight: bold;
          letter-spacing: 1px;
          box-shadow: 0 0 10px rgba(255, 68, 68, 0.3);
        }
        .contact-item.locked {
          cursor: not-allowed;
          opacity: 0.8;
        }
        .contact-item.locked:hover {
          border-color: #ff4444;
          box-shadow: -5px 5px 20px rgba(255, 68, 68, 0.1);
          transform: translateX(5px);
        }
        .footer {
          margin-top: 100px;
          text-align: center;
          color: #444;
          font-size: 0.8rem;
          letter-spacing: 2px;
        }
        @media (max-width: 768px) {
          .contact-item {
            padding: 1rem;
          }
          .value {
            font-size: 1rem;
          }
          .icon-box {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
