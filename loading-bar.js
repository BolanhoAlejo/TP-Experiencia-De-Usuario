const loadingBar = document.getElementById('loading-bar');

  function showLoadingBar() {
    loadingBar.classList.remove('hidden');
    loadingBar.style.transition = 'width 3s linear';
    loadingBar.style.width = '100%';
  }

  function hideLoadingBar() {
    loadingBar.style.transition = 'none';
    loadingBar.style.width = '0';
    setTimeout(() => {
      loadingBar.classList.add('hidden');
    }, 100);
  }

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'A' && target.href) {
      event.preventDefault();
      showLoadingBar();
      setTimeout(() => {
        window.location.href = target.href;
      }, 1500);
    }
  });

  window.addEventListener('load', hideLoadingBar);
