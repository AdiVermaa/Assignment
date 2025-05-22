import { Command } from 'lucide-react';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <div className="header-container">
        <h1 className="logo">
          <Command className="logo-icon" />
          PlutoController App
        </h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#usage">How to Use</a></li>
            <li><a href="#platforms">Platforms</a></li>
            <li><a href="#download">Download</a></li>
            <li>
              <button 
                onClick={toggleDarkMode} 
                className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 