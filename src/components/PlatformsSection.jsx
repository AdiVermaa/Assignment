import { Smartphone, Command } from 'lucide-react';

function PlatformsSection({ darkMode }) {
  const platforms = [
    {
      name: 'Android',
      version: '8.0+',
      available: true,
      icon: <Smartphone size={48} />,
    },
    {
      name: 'iOS',
      version: '14.0+',
      available: true,
      icon: <Smartphone size={48} />,
    },
    {
      name: 'Windows',
      version: '10+',
      available: false,
      icon: <Command size={48} />,
    }
  ];

  return (
    <section id="platforms" className="section platforms-section">
      <div className="section-container">
        <h2 className="section-title">Supported Platforms</h2>
        <div className="platforms-grid">
          {platforms.map((platform) => (
            <div 
              key={platform.name} 
              className={`platform-card ${darkMode ? 'dark' : 'light'}`}
            >
              <div className="platform-content">
                <div className={`platform-icon ${darkMode ? 'dark' : 'light'}`}>
                  {platform.icon}
                </div>
                <h3 className="platform-title">{platform.name}</h3>
                <p className="platform-version">Version {platform.version}</p>
                <div className={`platform-badge ${platform.available ? 'available' : 'unavailable'}`}>
                  {platform.available ? '✓ Available' : '✗ Coming Soon'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformsSection; 