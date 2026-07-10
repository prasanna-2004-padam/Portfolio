(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.setAttribute('data-open', String(open));
  };

  setOpen(false);

  toggle.addEventListener('click', () => {
    const isOpen = nav.getAttribute('data-open') === 'true';
    setOpen(!isOpen);
  });

  // Close menu when clicking a nav link (mobile)
  document.querySelectorAll('.nav-links a').forEach((a) => {
    a.addEventListener('click', () => setOpen(false));
  });
})();

