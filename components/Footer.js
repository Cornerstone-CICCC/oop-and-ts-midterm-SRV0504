export default function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-column">
        <!-- Logo SVG igual al del header -->
        <div class="footer-logo">
          <svg width="140" height="40" viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg" aria-label="BuyMe logo">
            <text x="0" y="28" font-family="Poppins, sans-serif" font-size="28" font-weight="700" fill="white">
              <tspan fill="#5AF5E7">B</tspan>uy
              <tspan fill="#5AF5E7">M</tspan>e
            </text>
          </svg>
        </div>
        <p>Exclusive deals and premium quality items.</p>
      </div>
     
      <div class="footer-column">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="https://github.com/SRV0504" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/rios-samuel-196954373/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 BuyMe. All rights reserved.</p>
    </div>
  `;

  return footer;
}
