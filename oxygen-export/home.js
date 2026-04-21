// Mobile nav toggle
const burger = document.querySelector('.nav__burger');
const links = document.querySelector('.nav__links');
if (burger && links) {
  burger.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      links.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

// Contact form stub
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const original = btn.textContent;
    btn.textContent = 'Message envoyé ✓';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = original; btn.disabled = false; form.reset(); }, 2500);
  });
}
