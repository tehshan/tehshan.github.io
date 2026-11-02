/**
 * Tuan Ehshan Pallie - Official Website JavaScript
 * Interactive Features, Theme Toggle, Modal & Service Inquiry Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initServiceFilters();
  initInquiryModal();
  initContactForms();
  initScrollSpy();
});

/* -------------------------------------------------------------
 * 1. Theme Management (Dark / Light)
 * ------------------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  // Retrieve saved preference or default to dark
  const savedTheme = localStorage.getItem('ehshan_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('ehshan_theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'light') {
    icon.innerHTML = `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`;
  } else {
    icon.innerHTML = `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
  }
}

/* -------------------------------------------------------------
 * 2. Mobile Menu & Navbar Scroll
 * ------------------------------------------------------------- */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '&times;' : '&#9776;';
    });

    // Close when clicking nav links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '&#9776;';
      });
    });
  }
}

/* -------------------------------------------------------------
 * 3. Services Filtering
 * ------------------------------------------------------------- */
function initServiceFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        if (filterValue === 'all' || card.classList.contains(`category-${filterValue}`)) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------
 * 4. Booking / Inquiry Modal
 * ------------------------------------------------------------- */
function initInquiryModal() {
  const modalOverlay = document.getElementById('inquiry-modal');
  const modalClose = document.getElementById('modal-close');
  const modalServiceSelect = document.getElementById('modal-service-select');
  const openButtons = document.querySelectorAll('[data-open-modal]');

  if (!modalOverlay) return;

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service') || 'General Inquiry';
      if (modalServiceSelect) {
        modalServiceSelect.value = serviceName;
      }
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  modalClose?.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Modal Form Submission Handler
  const modalForm = document.getElementById('modal-inquiry-form');
  modalForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('modal-name')?.value.trim();
    const contact = document.getElementById('modal-contact')?.value.trim();
    const service = document.getElementById('modal-service-select')?.value;
    const message = document.getElementById('modal-notes')?.value.trim();
    const method = document.querySelector('input[name="modal-method"]:checked')?.value || 'email';

    const formattedBody = `Hello Tuan Ehshan,\n\nI would like to inquire about: ${service}\n\nName: ${name}\nContact: ${contact}\n\nDetails:\n${message}`;

    if (method === 'whatsapp') {
      const waUrl = `https://wa.me/94754430476?text=${encodeURIComponent(formattedBody)}`;
      window.open(waUrl, '_blank');
    } else {
      const mailtoUrl = `mailto:palliete.24@uom.lk?subject=${encodeURIComponent('Inquiry: ' + service)}&body=${encodeURIComponent(formattedBody)}`;
      window.location.href = mailtoUrl;
    }

    closeModal();
    modalForm.reset();
  });
}

/* -------------------------------------------------------------
 * 5. General Contact Form
 * ------------------------------------------------------------- */
function initContactForms() {
  const contactForm = document.getElementById('main-contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const subject = document.getElementById('contact-subject')?.value.trim() || 'General Inquiry';
    const message = document.getElementById('contact-message')?.value.trim();

    const formattedBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:palliete.24@uom.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;

    window.location.href = mailtoUrl;
    contactForm.reset();
  });
}

/* -------------------------------------------------------------
 * 6. ScrollSpy for Active Nav Links
 * ------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}
