document.addEventListener('DOMContentLoaded', () => {
  const restartBtn = document.querySelector('.restart-btn');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      // simple restart: reload the page to replay animations
      window.location.reload();
    });
  }
});
