// Newsletter form stub (footer)
document.querySelectorAll('.newsletter').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = 'Merci ✓';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = original; btn.disabled = false; form.reset(); }, 2500);
  });
});
