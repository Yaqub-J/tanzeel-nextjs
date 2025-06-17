import { validateForm } from './validation';

// Mobile Navigation
const initMobileNav = () => {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.navmenu');

  if (!mobileNavToggle || !navMenu) return;

  mobileNavToggle.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-nav-active');
  });
};

// Form Validation
const initFormValidation = () => {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form as HTMLFormElement);
      const data: Record<string, string> = {};

      formData.forEach((value, key) => {
        data[key] = value.toString();
      });

      const rules = {
        email: { required: true, email: true },
        phone: { required: true, phone: true },
        name: { required: true, minLength: 2 },
        message: { required: true, minLength: 10 }
      };

      const errors = validateForm(data, rules);
      const errorElements = form.querySelectorAll('.error-message');
      errorElements.forEach(el => el.remove());

      if (Object.keys(errors).length > 0) {
        Object.entries(errors).forEach(([field, message]) => {
          const input = form.querySelector(`[name="${field}"]`);
          if (input) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = message;
            input.parentNode?.insertBefore(errorDiv, input.nextSibling);
          }
        });
        return;
      }

      // If no errors, submit the form
      form.submit();
    });
  });
};

// Smooth Scroll
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href') || '');
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
};

// Intersection Observer for Animations
const initIntersectionObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
};

// Initialize all features
const init = () => {
  initMobileNav();
  initFormValidation();
  initSmoothScroll();
  initIntersectionObserver();
};

// Run initialization when DOM is loaded
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', init);
}

export { init }; 