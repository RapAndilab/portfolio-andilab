import React, { useState } from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';

const projectsData = [
  {
    id: '01',
    title: 'University Enrollment System',
    description: 'A full-stack University Enrollment System built with React and Firebase. Features automated administrative workflows, student portals, and real-time status management.',
    tags: ['React', 'Firebase', 'Tailwind', 'EmailJS'],
  },
  {
    id: '02',
    title: 'MSU Suggestion Box',
    description: 'A Flutter-based digital feedback platform for Mindanao State University. Features secure suggestion submission and a real-time admin oversight dashboard.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Mobile'],
  },
  {
    id: '03',
    title: 'Barangay E-Form & Face Verification',
    description: 'A digital governance solution for document requests featuring secure facial recognition verification and automated administrative fulfillment.',
    tags: ['Next.js', 'PySide', 'Face-API', 'PostgreSQL'],
  },
  {
    id: '04',
    title: 'Badminton Queueing System',
    description: 'A Python-based automation tool for court management. Features custom matching algorithms, SQLite backend, and a "click-and-run" desktop experience.',
    tags: ['Python', 'PyQt6', 'SQLite', 'Algorithms'],
  },
  {
    id: '05',
    title: 'Automated Sliding Door System',
    description: 'An embedded systems application using PIC microcontrollers and MikroC Pro. Automates door mechanics via multi-input sensor integration.',
    tags: ['PIC Microcontroller', 'MikroC Pro', 'Embedded C', 'Hardware'],
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app-container">
      {/* Immersive Light Tech Background */}
      <div className="tech-bg"></div>
      <div className="ambient-glow"></div>

      {/* Premium HUD Navigation */}
      <nav className="hud-nav glass-morphism">
        <div className="nav-logo mono">
          ANDILAB <span className="logo-version">OS.Light v2.0</span>
        </div>
        <div className="nav-links">
          {['home', 'projects', 'about', 'contact'].map((item, idx) => (
            <button
              key={item}
              className={`nav-item mono ${activeTab === item ? 'active' : ''}`}
              onClick={() => setActiveTab(item)}
            >
              <span className="nav-index">0{idx + 1}</span>
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="content-frame">
        {/* HERO SECTION - MAX POLISH */}
        <section className={`scene ${activeTab === 'home' ? 'active' : ''}`}>
          <div className="hero-content">
            <div className="hero-text-container">
              <h2 className="mono tech-label">SYSTEM_ONLINE // WELCOME</h2>
              <h1 className="main-title gradient-text">Ralph Wyndril O. Andilab</h1>
              <p className="hero-description scroll-reveal">
                 Software Engineer & UI/UX Architect crafting high-performance, immersive digital experiences. 
                 Fusing relentless logic with cutting-edge visual design.
              </p>
              <div className="hero-actions">
                <button className="primary-btn mono" onClick={() => setActiveTab('projects')}>
                  EXPLORE_DATABANKS
                </button>
              </div>
            </div>

            <div className="hero-profile-container">
               <div className="profile-glitch-box">
                  <img src="/profile.jpg" alt="Human Protocol" className="profile-img human-profile" onError={(e) => { e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="320" height="400"><rect width="320" height="400" fill="%230f172a"/><text x="50%" y="50%" fill="%2394a3b8" font-family="monospace" font-size="14" text-anchor="middle">AWAITING_HUMAN_IMG</text></svg>' }} />
                  <img src="/robot.png" alt="Cyber Protocol" className="profile-img robot-profile" onError={(e) => { e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="320" height="400"><rect width="320" height="400" fill="%23020617"/><text x="50%" y="50%" fill="%230ea5e9" font-family="monospace" font-size="14" text-anchor="middle">ROBOT_IMG_NOT_FOUND</text></svg>' }} />
                  <div className="scanline-overlay"></div>
               </div>
            </div>

          </div>
        </section>
        
        {/* PROJECTS SECTION */}
        <section className={`scene project-scene ${activeTab === 'projects' ? 'active' : ''}`}>
           <h2 className="mono tech-label" style={{marginBottom: '1rem'}}>ARCHIVED_PROTOCOLS :: {projectsData.length}</h2>
           <div className="project-grid">
             {projectsData.map(project => (
               <ProjectCard key={project.id} {...project} />
             ))}
           </div>
        </section>

        {/* ABOUT SECTION */}
        <section className={`scene ${activeTab === 'about' ? 'active' : ''}`}>
           <h2 className="mono tech-label">USER_BIO :: DECRYPTED</h2>
           <div className="about-content glass-morphism" style={{padding: '3rem', maxWidth: '800px', lineHeight: '1.8'}}>
             <p className="mono" style={{color: 'var(--text-dim)', fontSize: '1.1rem'}}>
               &gt; Operating System: Biological Node<br/><br/>
               I am driven by the intersection of engineering and art. Translating complex system requirements into stunning, ultra-responsive interfaces is my primary protocol. Every pixel is calculated; every interaction is smoothed to a razor's edge.<br/><br/>
               [Capabilities]: Fullstack Architecture, Motion Design, System Optimization.
             </p>
           </div>
        </section>

        {/* CONTACT SECTION */}
        <section className={`scene ${activeTab === 'contact' ? 'active' : ''}`}>
           <h2 className="mono tech-label">ESTABLISH_UPLINK</h2>
           <div className="contact-frame glass-morphism" style={{padding: '4rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto'}}>
             <h3 className="gradient-text" style={{fontSize: '2rem', marginBottom: '1rem'}}>Initiate Handshake</h3>
             <p style={{color: 'var(--text-dim)', marginBottom: '2rem', fontSize: '1.1rem'}}>
               Open for transmission regarding new deployments, strategic alliances, or architectural inquiries.
             </p>
             <button className="primary-btn mono" style={{padding: '1rem 3rem', fontSize: '1rem'}}>SEND_TRANSMISSION</button>
           </div>
        </section>
      </main>

      {/* Ultra-Clean Status Bar */}
      <footer className="status-bar mono">
        <div className="status-item">CORE_SYS: OPTIMAL</div>
        <div className="status-item">LOC: PHT-08:00 (MNL)</div>
        <div className="status-item" style={{marginLeft: 'auto'}}>© 2026 ANDILAB. ARCHITECTURE</div>
      </footer>
    </div>
  );
}

export default App;
