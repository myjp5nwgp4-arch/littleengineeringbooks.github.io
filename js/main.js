// Central store of book links. Edit links here only; any element with
// data-buy="<key>" gets its href set from this list. Use null until a link is available.
const BUY_LINKS = {
  'analogue-sensors': 'https://link.amazon/B05M1KRMV',
  'op-amps': 'https://link.amazon/B0dMsSQop',
  'converters': 'https://link.amazon/B06JfCC0e',
  'digital-communications': 'https://link.amazon/B0cJGFcHZ',
  'help-engineers': 'https://link.amazon/B0fDh9bcf',
  'help-managers': null, // Replace with the Amazon URL when available.
};

document.querySelectorAll('[data-buy]').forEach(el => {
  const url = BUY_LINKS[el.dataset.buy];
  if (url) {
    el.href = url;
  } else {
    el.removeAttribute('href');
    el.classList.add('btn-coming-soon');
    el.removeAttribute('target');
    if (el.dataset.buyLabel) {
      el.textContent = el.dataset.buyLabel;
      el.setAttribute('aria-disabled', 'true');
      el.title = 'Amazon link coming soon';
    } else {
      el.textContent = 'Coming Soon!';
    }
  }
});

// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.site-nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Close menu when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
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
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Keyboard accessibility for buttons
document.querySelectorAll('.btn, a, button').forEach(element => {
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (element.tagName !== 'A') element.click();
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
