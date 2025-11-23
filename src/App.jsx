import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import './components.css'
import './minecraft-icons.css'
import AboutMe from '../Components/AboutMe.jsx'
import Contact from '../Components/Contact.jsx'
import Experiences from '../Components/Experiences.jsx'
import Home from '../Components/Home.jsx'
import Projects from '../Components/Projects.jsx'
import '@fontsource/press-start-2p/index.css'

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [mode, setMode] = useState('overworld') // 'overworld' or 'nether'
  
  const toggleMode = () => {
    setMode(prev => prev === 'overworld' ? 'nether' : 'overworld')
  }
  
  // Navigation menu items with Minecraft item icons
  const navItems = [
    { id: 'home', label: 'Home', iconClass: 'icon-home' },
    { id: 'projects', label: 'Projects', iconClass: 'icon-projects' },
    { id: 'experience', label: 'Experience', iconClass: 'icon-experience' },
    { id: 'skills', label: 'Skills', iconClass: 'icon-skills' },
    { id: 'about', label: 'About', iconClass: 'icon-about' },
    { id: 'contact', label: 'Contact', iconClass: 'icon-contact' },
  ]

  const handleNavClick = (section) => {
    setCurrentSection(section)
  }
  
  // Function to render the active section content
  const renderSection = () => {
    switch(currentSection) {
      case 'home':
        return <Home mode={mode} />;
      case 'projects':
        return <Projects mode={mode} />;
      case 'experience':
        return <Experiences mode={mode} />;
      case 'about':
        return <AboutMe mode={mode} />;
      case 'contact':
        return <Contact mode={mode} />;
      case 'skills':
        return <div className="skills-section">
          <h1>MY SKILLS</h1>
          <div className="minecraft-inventory-grid">
            {/* Skills rendered as Minecraft items */}
            <div className="inventory-slot">
              <div className="inventory-item" data-skill="React">
                <div className="skill-icon skill-react"></div>
                <span className="item-name">React</span>
              </div>
            </div>
            <div className="inventory-slot">
              <div className="inventory-item" data-skill="JavaScript">
                <div className="skill-icon skill-javascript"></div>
                <span className="item-name">JavaScript</span>
              </div>
            </div>
            <div className="inventory-slot">
              <div className="inventory-item" data-skill="HTML/CSS">
                <div className="skill-icon skill-html-css"></div>
                <span className="item-name">HTML/CSS</span>
              </div>
            </div>
            <div className="inventory-slot">
              <div className="inventory-item" data-skill="Node.js">
                <div className="skill-icon skill-node"></div>
                <span className="item-name">Node.js</span>
              </div>
            </div>
            <div className="inventory-slot">
              <div className="inventory-item" data-skill="Firebase">
                <div className="skill-icon skill-firebase"></div>
                <span className="item-name">Firebase</span>
              </div>
            </div>
            <div className="inventory-slot">
              <div className="inventory-item" data-skill="Git">
                <div className="skill-icon skill-git"></div>
                <span className="item-name">Git</span>
              </div>
            </div>
          </div>
        </div>;
      default:
        return <Home />;
    }
  };

  return (
    <div className={`minecraft-world ${mode}`}>
      {/* Video Background */}
      <video 
        key={mode}
        autoPlay 
        loop 
        muted 
        playsInline
        className="video-background"
        src={mode === 'overworld' ? '/background/Overworld_wallpaper.mp4' : '/background/Nether_wallpaper.mp4'}
      />
      <div className="video-overlay"></div>
      
      {/* Left Sidebar - Info & Mode Toggle */}
      <div className="minecraft-left-sidebar">
        <div className="sidebar-item home-button" onClick={() => handleNavClick('home')} data-tooltip="Home">
          <img src="/assets/minecraft_grass_block.png" alt="Home" className="sidebar-icon" />
        </div>
        <div className="sidebar-item mode-toggle" onClick={toggleMode} data-tooltip={mode === 'overworld' ? 'Switch to Nether' : 'Switch to Overworld'}>
          <div className="mode-toggle-button">
            <img 
              src={mode === 'overworld' ? '/src/assets/minecraft_grass_block.png' : '/src/assets/minecraft_netherrack.png'} 
              alt={mode} 
              className="mode-toggle-icon"
            />
          </div>
        </div>
      </div>
      
      {/* Main content with animation */}
      <div className="minecraft-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="minecraft-section-content"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Right Sidebar - Navigation */}
      <div className="minecraft-right-sidebar">
        <div 
          className={`sidebar-nav-item ${currentSection === 'projects' ? 'active' : ''}`}
          onClick={() => handleNavClick('projects')}
          data-tooltip="Projects"
        >
          <img src="/assets/minecraft_crafting_table.png" alt="Projects" className="sidebar-nav-icon" />
        </div>
        <div 
          className={`sidebar-nav-item ${currentSection === 'experience' ? 'active' : ''}`}
          onClick={() => handleNavClick('experience')}
          data-tooltip="Experience"
        >
          <img src="/assets/minecraft_experience_bottle.png" alt="Experience" className="sidebar-nav-icon" />
        </div>
        <div 
          className={`sidebar-nav-item ${currentSection === 'skills' ? 'active' : ''}`}
          onClick={() => handleNavClick('skills')}
          data-tooltip="Skills"
        >
          <img src="/assets/minecraft_anvil.png" alt="Skills" className="sidebar-nav-icon" />
        </div>
        <div 
          className={`sidebar-nav-item ${currentSection === 'about' ? 'active' : ''}`}
          onClick={() => handleNavClick('about')}
          data-tooltip="About"
        >
          <img src="/assets/minecraft_player_head.png" alt="About" className="sidebar-nav-icon" />
        </div>
        <div 
          className={`sidebar-nav-item ${currentSection === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavClick('contact')}
          data-tooltip="Contact"
        >
          <img src="/assets/minecraft_writable_book.png" alt="Contact" className="sidebar-nav-icon" />
        </div>
      </div>
    </div>
  )
}

export default App
