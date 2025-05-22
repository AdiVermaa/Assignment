import { Smartphone } from 'lucide-react';

function AboutSection({ darkMode }) {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <h2 className="section-title">What is PlutoController?</h2>
        <div className={`about-content ${darkMode ? 'dark' : 'light'}`}>
          <div className="about-layout">
            <div className="about-icon-container">
              <div className={`about-icon ${darkMode ? 'dark' : 'light'}`}>
                <Smartphone size={64} className="icon" />
              </div>
            </div>
            <div className="about-text">
              <p className="about-paragraph">
                <strong>PlutoController</strong> is a powerful mobile application designed specifically for controlling and programming Pluto Nano Drones. It provides an intuitive interface that allows users to fly their drone with precision and access advanced features.
              </p>
              <p className="about-paragraph">
                Whether you're a beginner learning to fly or an advanced user looking to execute complex maneuvers, PlutoController offers a comprehensive set of tools to enhance your drone flying experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection; 