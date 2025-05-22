import { Command, Shield, Zap } from 'lucide-react';

function FeaturesSection({ darkMode }) {
  const features = [
    {
      title: 'Real-time Control',
      description: 'Fly your Pluto Nano Drone with precision using intuitive touch controls',
      icon: <Command size={36} />,
    },
    {
      title: 'Safety Measures',
      description: 'Built-in collision detection and battery monitoring for safe flights',
      icon: <Shield size={36} />,
    },
    {
      title: 'Flight Modes',
      description: 'Multiple flight modes including beginner, intermediate, and expert settings',
      icon: <Zap size={36} />,
    },
    {
      title: 'Custom Programming',
      description: 'Program custom flight patterns and behaviors with the PlutoBlocks integration',
      icon: <Command size={36} />,
    },
    {
      title: 'Flight Tracking',
      description: 'Track flight paths, duration, and performance metrics',
      icon: <Command size={36} />,
    },
    {
      title: 'Community Sharing',
      description: 'Share your flight patterns and achievements with the Pluto community',
      icon: <Command size={36} />,
    }
  ];

  return (
    <section id="features" className="section features-section">
      <div className="section-container">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card ${darkMode ? 'dark' : 'light'}`}
            >
              <div className="feature-content">
                <div className={`feature-icon ${darkMode ? 'dark' : 'light'}`}>
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection; 