// about.js
import { renderHeader } from './components/Header.js';
import Footer from './components/Footer.js';

const app = document.getElementById('app');
app.innerHTML = '';

// Header
const header = renderHeader();
app.appendChild(header);

// About content
const section = document.createElement('section');
section.className = 'about-content';
section.innerHTML = `
  <div class="about-wrapper">
    <h2>About This Project</h2>
<p>
  This website was created as part of a student project for my web development course. The goal was to design and build a functional e-commerce interface using HTML, CSS, and JavaScript — without any external frameworks.
</p>
<p>
  It showcases my understanding of component-based architecture, DOM manipulation, modular JavaScript, and responsive design. All product data and cart features are handled through vanilla JavaScript, with a focus on clean UI and user experience.
</p>
<p>
  This project is a part of my personal portfolio and reflects my learning progress as I continue to grow as a front-end developer.
</p>

  </div>
`;
app.appendChild(section);

// Footer
const footer = Footer();
app.appendChild(footer);
