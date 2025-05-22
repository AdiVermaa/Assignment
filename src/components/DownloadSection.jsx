import { Download } from 'lucide-react';

function DownloadSection({ darkMode }) {
  return (
    <section id="download" className="section download-section">
      <div className="section-container">
        <h2 className="section-title">Get PlutoController Now</h2>
        <div className={`download-content ${darkMode ? 'dark' : 'light'}`}>
          <p className="download-text">
            Ready to take your Pluto Nano Drone experience to the next level? Download the PlutoController app today and unlock the full potential of your drone!
          </p>
          <div className="download-buttons">
            <button className="download-button">
              <Download size={20} />
              Download for Android
            </button>
            <button className="download-button">
              <Download size={20} />
              Download for iOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadSection; 