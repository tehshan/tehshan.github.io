/**
 * Tuan Ehshan Pallie - Official Portfolio & Services Script
 * Minimalist, Fast, Robust & Accessible
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initFilters();
  initInquiryModal();
  initContactForm();
  initScrollSpy();
  
  // Set current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* -------------------------------------------------------------
 * 1. Theme Switcher (Dark / Light)
 * ------------------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('ehshan_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ehshan_theme', next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'light') {
    // Sun icon
    icon.innerHTML = `<svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path stroke-linecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
  } else {
    // Moon icon
    icon.innerHTML = `<svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;
  }
}

/* -------------------------------------------------------------
 * 2. Mobile Menu & Nav Scroll
 * ------------------------------------------------------------- */
function initNav() {
  const mobileToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.innerHTML = isOpen 
        ? `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`
        : `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"/></svg>`;
    });

    // Close when clicking nav links
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.innerHTML = `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"/></svg>`;
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        mobileToggle.innerHTML = `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"/></svg>`;
      }
    });
  }
}

/* -------------------------------------------------------------
 * 3. Services Filtering
 * ------------------------------------------------------------- */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-pill');
  const serviceCards = document.querySelectorAll('.clean-service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        if (filterVal === 'all' || card.classList.contains(`category-${filterVal}`)) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
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
  const modalSelect = document.getElementById('modal-service-select');
  const openButtons = document.querySelectorAll('[data-open-modal]');

  if (!modalOverlay) return;

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const sName = btn.getAttribute('data-service') || 'General Consultation';
      if (modalSelect) modalSelect.value = sName;
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
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
  });

  const modalForm = document.getElementById('modal-inquiry-form');
  modalForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('modal-name')?.value.trim();
    const contact = document.getElementById('modal-contact')?.value.trim();
    const service = modalSelect?.value || 'Consultation';
    const notes = document.getElementById('modal-notes')?.value.trim();
    const method = document.querySelector('input[name="modal-method"]:checked')?.value || 'whatsapp';

    const message = `Hello Tuan Ehshan,\n\nI would like to inquire regarding: ${service}\n\nName: ${name}\nContact: ${contact}\n\nDetails:\n${notes}`;

    if (method === 'whatsapp') {
      const waUrl = `https://wa.me/94754430476?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    } else {
      const mailtoUrl = `mailto:palliete.24@uom.lk?subject=${encodeURIComponent('Inquiry: ' + service)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoUrl;
    }

    closeModal();
    modalForm.reset();
  });
}

/* -------------------------------------------------------------
 * 5. Main Contact Form
 * ------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('main-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const subject = document.getElementById('contact-subject')?.value.trim() || 'General Inquiry';
    const message = document.getElementById('contact-message')?.value.trim();

    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:palliete.24@uom.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    form.reset();
  });
}

/* -------------------------------------------------------------
 * 6. ScrollSpy for Navigation Links
 * ------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
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
