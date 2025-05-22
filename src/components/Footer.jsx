function Footer({ darkMode }) {
  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <div className="footer-container">
        <p>© 2025 Drona Aviation Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 