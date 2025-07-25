// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuToggle.classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuToggle.classList.remove('fa-times');
  });
});

// Sticky Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// Tab Functionality
function opentab(tabname) {
  const tablinks = document.querySelectorAll('.tab-links');
  const tabcontents = document.querySelectorAll('.tab-contents');
  
  tablinks.forEach(tablink => tablink.classList.remove('active-link'));
  tabcontents.forEach(tabcontent => tabcontent.classList.remove('active-tab'));
  
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}

// Form Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.createElement('div');
formStatus.className = 'form-status';
contactForm.appendChild(formStatus);

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  formStatus.textContent = "✓ Message sent successfully!";
  formStatus.classList.add('success');
  
  setTimeout(() => {
    formStatus.textContent = "";
    formStatus.classList.remove('success');
    contactForm.reset();
  }, 5000);
});

// Initialize Typed.js
if (document.querySelector('.text-animate h3')) {
  const typed = new Typed('.text-animate h3', {
    strings: ['Frontend Developer', 'UI/UX Designer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});

// Initialize ScrollReveal
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  });

  sr.reveal('.home-content, .heading', {});
  sr.reveal('.home-img, .portfolio-box', {delay: 200});
}

// Mobile Resume Viewer Fallback
if (window.innerWidth < 768 && document.querySelector('.resume-viewer')) {
  document.querySelector('.resume-viewer').innerHTML = `
    <p>For best experience, please download the resume:</p>
    <a href="resume.pdf" download class="btn">Download Resume</a>
  `;
}

// Initialize Particles.js if available
if (typeof particlesJS !== 'undefined') {
  particlesJS.load('particles-js', 'particles.json')
    .catch(err => console.error('Particles.js error:', err));
}

// In your script.js
document.addEventListener('DOMContentLoaded', function() {
    const viewAllBtn = document.querySelector('.portfolio .btn');
    const portfolioContainer = document.querySelector('.portfolio-container');
    let showingAll = false;
    
    // Hide all except first 4 projects initially
    const allProjects = document.querySelectorAll('.portfolio-box');
    if (allProjects.length > 4) {
        for (let i = 4; i < allProjects.length; i++) {
            allProjects[i].classList.add('hidden');
        }
    } else {
        viewAllBtn.style.display = 'none';
    }
    
    // Toggle functionality
    viewAllBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showingAll = !showingAll;
        
        document.querySelectorAll('.portfolio-box.hidden').forEach(project => {
            project.classList.toggle('hidden');
        });
        
        this.textContent = showingAll ? 'Show Less' : 'View All Projects';
    });
});

// Update this in script.js
function handleResumeViewer() {
  const resumeViewer = document.querySelector('.resume-viewer');
  if (window.innerWidth < 768 && resumeViewer) {
    resumeViewer.innerHTML = `
      <div class="mobile-resume-fallback">
        <p>For best experience, please download the resume:</p>
        <div class="mobile-download-options">
          <a href="resume.pdf" download class="btn">
            <i class="fas fa-file-pdf"></i> PDF Version
          </a>
          <a href="resume.docx" download class="btn">
            <i class="fas fa-file-word"></i> DOCX Version
          </a>
        </div>
      </div>
    `;
  }
}

// Call on load and resize
window.addEventListener('load', handleResumeViewer);
window.addEventListener('resize', handleResumeViewer);