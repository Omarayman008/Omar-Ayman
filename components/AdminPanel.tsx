'use client';

import React, { useState, useEffect } from 'react';

interface Project {
  id?: number;
  name: string;
  tech: string;
  description: string;
  link: string;
  level: number;
  color: string;
  biomeColor?: string;
  characterType?: 'rex' | 'pterodactyl' | 'anky' | 'triceratops' | 'spinosaurus';
}

interface AdminPanelProps {
  projects: Project[];
  onAddProject: (project: Project) => void;
  onDeleteProject: (index: number) => void;
  onUpdateProject: (index: number, project: Project) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ projects, onAddProject, onDeleteProject, onUpdateProject }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<Project>({
    name: '',
    tech: '',
    description: '',
    link: '',
    level: 1,
    color: '#bdff90',
    biomeColor: '#111111',
    characterType: 'rex'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingIndex !== null) {
      onUpdateProject(editingIndex, formData);
    } else {
      onAddProject(formData);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: '', tech: '', description: '', link: '', level: 1, color: '#bdff90', biomeColor: '#111111', characterType: 'rex' });
    setEditingIndex(null);
    setIsOpen(false);
  };

  const handleEdit = (index: number) => {
    const project = projects[index];
    setFormData({
      ...project,
      biomeColor: project.biomeColor || '#111111'
    });
    setEditingIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="admin-wrapper">
      <button className="admin-trigger" onClick={() => setIsOpen(true)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        <span>ADMIN_PANEL</span>
      </button>

      {isOpen && (
        <div className="admin-modal">
          <div className="admin-card border-accent">
            <div className="card-header">
              <h3>{editingIndex !== null ? '_EDIT_PROJECT' : '_ADD_NEW_PROJECT'}</h3>
              <button className="close-btn" onClick={resetForm}>×</button>
            </div>
            
            <div className="admin-content-layout">
              <form onSubmit={handleSubmit} className="project-form">
                <div className="form-group">
                  <label>PROJECT_NAME</label>
                  <input 
                    type="text" 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>TECH_STACK</label>
                  <input 
                    type="text" 
                    value={formData.tech} 
                    onChange={e => setFormData({...formData, tech: e.target.value})} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>DESCRIPTION</label>
                  <textarea 
                    value={formData.description} 
                    onChange={e => setFormData({...formData, description: e.target.value})} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>LINK</label>
                  <input 
                    type="text" 
                    value={formData.link} 
                    onChange={e => setFormData({...formData, link: e.target.value})} 
                    required 
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>LEVEL</label>
                    <input 
                      type="number" 
                      value={formData.level} 
                      onChange={e => setFormData({...formData, level: parseInt(e.target.value)})} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>COLOR_HEX</label>
                    <input 
                      type="color" 
                      value={formData.color} 
                      onChange={e => setFormData({...formData, color: e.target.value})} 
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>BIOME_COLOR</label>
                  <input 
                    type="color" 
                    value={formData.biomeColor || '#111111'} 
                    onChange={e => setFormData({...formData, biomeColor: e.target.value})} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>CHARACTER_TYPE</label>
                  <select 
                    value={formData.characterType || 'rex'} 
                    onChange={e => setFormData({...formData, characterType: e.target.value as any})}
                    className="admin-select"
                  >
                    <option value="rex">REX (CLASSIC)</option>
                    <option value="pterodactyl">PETRADON (FLYER)</option>
                    <option value="anky">ANKY (TANK)</option>
                    <option value="triceratops">TRICERA (STURDY)</option>
                    <option value="spinosaurus">SPINO (HUNTER)</option>
                  </select>
                </div>
                <button type="submit" className="btn submit-btn">
                  {editingIndex !== null ? 'UPDATE_PROJECT' : 'INJECT_PROJECT'}
                </button>
              </form>

              <div className="project-list-sidebar">
                <label>EXISTING_PROJECTS</label>
                <div className="list-container">
                  {projects.map((p, i) => (
                    <div key={`${p.name}-${i}`} className="list-item">
                      <span className="item-name">{p.name}</span>
                      <div className="item-actions">
                        <button type="button" onClick={() => handleEdit(i)} className="edit-icon">✎</button>
                        <button type="button" onClick={() => onDeleteProject(i)} className="delete-icon">×</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button 
                  type="button" 
                  className="reset-btn"
                  onClick={() => {
                    if(confirm("RESET_ALL_DATA_TO_DEFAULT?")) {
                      localStorage.removeItem('omar_projects');
                      window.location.reload();
                    }
                  }}
                >
                  RESET_TO_DEFAULT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .admin-wrapper {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
        }
        .admin-trigger {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid var(--accent);
          color: var(--accent);
          padding: 8px 15px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: inherit;
          cursor: pointer;
          font-size: 0.7rem;
          letter-spacing: 2px;
          transition: all 0.3s ease;
        }
        .admin-trigger:hover {
          background: var(--accent);
          color: #000;
          box-shadow: 0 0 20px var(--accent);
        }
        .admin-trigger svg {
          width: 14px;
          height: 14px;
        }
        .admin-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.95);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .admin-card {
          background: #0a0a0a;
          width: 100%;
          max-width: 900px;
          padding: 2rem;
          position: relative;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          border-bottom: 1px solid #222;
          padding-bottom: 1rem;
        }
        .admin-content-layout {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 2rem;
        }
        .close-btn {
          background: none;
          border: none;
          color: #444;
          font-size: 2rem;
          cursor: pointer;
        }
        .form-group {
          margin-bottom: 1.2rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        label {
          display: block;
          font-size: 0.6rem;
          color: var(--accent);
          margin-bottom: 0.4rem;
          letter-spacing: 2px;
        }
        input, textarea {
          width: 100%;
          background: #000;
          border: 1px solid #222;
          color: #fff;
          padding: 12px;
          font-family: inherit;
          font-size: 0.9rem;
        }
        input:focus, textarea:focus, .admin-select:focus {
          border-color: var(--accent);
          outline: none;
        }
        .admin-select {
          width: 100%;
          background: #000;
          border: 1px solid #222;
          color: #fff;
          padding: 12px;
          font-family: inherit;
        }
        .submit-btn {
          width: 100%;
          margin-top: 1rem;
        }
        
        .project-list-sidebar {
          border-left: 1px solid #222;
          padding-left: 2rem;
        }
        .list-container {
          margin-top: 1rem;
          max-height: 400px;
          overflow-y: auto;
        }
        .list-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          border-bottom: 1px solid #111;
          background: #000;
          margin-bottom: 5px;
        }
        .item-name {
          font-size: 0.8rem;
          color: #888;
        }
        .item-actions {
          display: flex;
          gap: 10px;
        }
        .edit-icon, .delete-icon {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.3s;
        }
        .edit-icon { color: #555; }
        .edit-icon:hover { color: var(--accent); }
        .delete-icon { color: #555; }
        .delete-icon:hover { color: #ff4444; }

        .reset-btn {
          margin-top: 2rem;
          background: none;
          border: 1px solid #333;
          color: #444;
          width: 100%;
          padding: 8px;
          font-size: 0.6rem;
          cursor: pointer;
          transition: all 0.3s;
        }
        .reset-btn:hover {
          border-color: #ff4444;
          color: #ff4444;
        }

        @media (max-width: 768px) {
          .admin-content-layout {
            grid-template-columns: 1fr;
          }
          .project-list-sidebar {
            border-left: none;
            border-top: 1px solid #222;
            padding-left: 0;
            padding-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminPanel;
