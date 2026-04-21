// Contact form stub
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = 'Message envoyé ✓';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = original; btn.disabled = false; contactForm.reset(); }, 2500);
  });
}
