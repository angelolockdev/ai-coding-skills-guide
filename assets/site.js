(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.dataset.motionReady = 'true';

  const observer = !reducedMotion && 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      }, { threshold: 0.18 })
    : null;

  document.querySelectorAll('.reveal, .story-card').forEach((element) => {
    if (observer) observer.observe(element);
    else element.classList.add('is-visible');
  });

  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const command = button.closest('.command')?.querySelector('code')?.textContent;
      if (!command) return;

      try {
        await navigator.clipboard.writeText(command);
        const originalLabel = button.textContent;
        button.textContent = 'Copié';
        button.classList.add('is-copied');
        window.setTimeout(() => {
          button.textContent = originalLabel;
          button.classList.remove('is-copied');
        }, 1800);
      } catch {
        button.textContent = 'Copiez le texte';
      }
    });
  });
})();
