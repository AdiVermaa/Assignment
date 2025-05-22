function UsageSection({ darkMode }) {
  const steps = [
    {
      number: 1,
      title: 'Download & Install',
      description: 'Download the PlutoController app from your device\'s app store and complete the installation process.',
    },
    {
      number: 2,
      title: 'Connect Your Drone',
      description: 'Power on your Pluto Nano Drone and connect it to the app via Bluetooth by following the in-app pairing instructions.',
    },
    {
      number: 3,
      title: 'Calibrate Controls',
      description: 'Follow the on-screen calibration process to ensure your drone responds accurately to commands.',
    },
    {
      number: 4,
      title: 'Choose Flight Mode',
      description: 'Select your preferred flight mode based on your experience level and flying environment.',
    },
    {
      number: 5,
      title: 'Fly & Control',
      description: 'Use the intuitive on-screen controls to fly your drone. Swipe gestures control direction while buttons manage altitude and special maneuvers.',
    }
  ];

  return (
    <section id="usage" className="section usage-section">
      <div className="section-container">
        <h2 className="section-title">How to Use It</h2>
        <div className={`usage-content ${darkMode ? 'dark' : 'light'}`}>
          <div className="steps-container">
            {steps.map((step) => (
              <div key={step.number} className="step-item">
                <div className={`step-number ${darkMode ? 'dark' : 'light'}`}>
                  {step.number}
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
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