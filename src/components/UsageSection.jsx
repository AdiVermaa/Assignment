import { useState, useEffect, useCallback } from 'react';

function UsageSection({ darkMode }) {
  const [activeStep, setActiveStep] = useState(1);
  const [isHovered, setIsHovered] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const STEP_DURATION = 3000; // 3 seconds per step

  const nextStep = useCallback(() => {
    setActiveStep((current) => current === 5 ? 1 : current + 1);
  }, []);

  useEffect(() => {
    let intervalId;
    if (isPlaying && !isHovered) {
      intervalId = setInterval(nextStep, STEP_DURATION);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, isHovered, nextStep]);

  const handleStepClick = (stepNumber) => {
    setActiveStep(stepNumber);
    setIsPlaying(false);
  };

  const handleMouseEnter = (stepNumber) => {
    setIsHovered(stepNumber);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const steps = [
    {
      number: 1,
      title: 'Download & Install',
      description: 'Download the PlutoController app from your device\'s app store and complete the installation process.',
      icon: '📱'
    },
    {
      number: 2,
      title: 'Connect Your Drone',
      description: 'Power on your Pluto Nano Drone and connect it to the app via Bluetooth by following the in-app pairing instructions.',
      icon: '🔗'
    },
    {
      number: 3,
      title: 'Calibrate Controls',
      description: 'Follow the on-screen calibration process to ensure your drone responds accurately to commands.',
      icon: '⚙️'
    },
    {
      number: 4,
      title: 'Choose Flight Mode',
      description: 'Select your preferred flight mode based on your experience level and flying environment.',
      icon: '🎮'
    },
    {
      number: 5,
      title: 'Fly & Control',
      description: 'Use the intuitive on-screen controls to fly your drone. Swipe gestures control direction while buttons manage altitude and special maneuvers.',
      icon: '✈️'
    }
  ];

  const mode = darkMode ? 'dark' : 'light';

  return (
    <section id="usage" className="section usage-section">
      <div className="section-container">
        <h2 className="section-title">How to Use It</h2>
        <div className={`usage-content ${mode}`}>
          <div className="controls">
            <button 
              className={`control-button ${mode}`}
              onClick={togglePlayPause}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
          </div>
          <div className={`progress-bar ${mode}`}>
            {steps.map((step) => (
              <div
                key={step.number}
                className={`progress-step ${mode} ${activeStep >= step.number ? 'completed' : ''}`}
                style={{ width: `${100 / steps.length}%` }}
              />
            ))}
          </div>
          
          <div className="steps-container">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`step-item ${mode} ${activeStep === step.number ? 'active' : ''} 
                           ${isHovered === step.number ? 'hovered' : ''}`}
                onClick={() => handleStepClick(step.number)}
                onMouseEnter={() => handleMouseEnter(step.number)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`step-number ${mode}`}>
                  <span className="step-icon">{step.icon}</span>
                  {step.number}
                </div>
                <div className="step-content">
                  <h3 className={`step-title ${mode}`}>{step.title}</h3>
                  <p className={`step-description ${mode}`}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UsageSection; 