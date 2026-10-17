// Central store of "Buy Book" links. Edit links here only; any element with
// data-buy="<key>" gets its href set from this list. Use null for "not yet available".
const BUY_LINKS = {
  'analogue-sensors': null,
  'op-amps': 'https://link.amazon/B00Ctd8Zt',
  'converters': 'https://link.amazon/B05cBkwWZ',
  'digital-communications': null
};

document.querySelectorAll('[data-buy]').forEach(el => {
  const url = BUY_LINKS[el.dataset.buy];
  if (url) {
    el.href = url;
  } else {
    el.removeAttribute('href');
    el.classList.add('btn-coming-soon');
    el.textContent = 'Coming Soon!';
    el.removeAttribute('target');
  }
});

// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.site-nav');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Keyboard accessibility for buttons
document.querySelectorAll('.btn, a, button').forEach(element => {
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (element.tagName !== 'A') {
        element.click();
      }
    }
  });
});

document.querySelectorAll('.copy-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var code = btn.parentElement.querySelector('code').textContent;
    navigator.clipboard.writeText(code).then(function () {
      btn.textContent = 'Copied!';
      setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
    });
  });
});
