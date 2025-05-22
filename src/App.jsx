import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import UsageSection from './components/UsageSection';
import PlatformsSection from './components/PlatformsSection';
import DownloadSection from './components/DownloadSection';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <AboutSection darkMode={darkMode} />
        <FeaturesSection darkMode={darkMode} />
        <UsageSection darkMode={darkMode} />
        <PlatformsSection darkMode={darkMode} />
        <DownloadSection darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}