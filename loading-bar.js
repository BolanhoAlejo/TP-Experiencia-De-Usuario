const loadingBar = document.getElementById('loading-bar');

  // Mostrar la barra de carga
  function showLoadingBar() {
    loadingBar.classList.remove('hidden');
    loadingBar.style.transition = 'width 3s linear'; // Animación más lenta
    loadingBar.style.width = '100%'; // Llena completamente
  }

  // Ocultar la barra de carga
  function hideLoadingBar() {
    loadingBar.style.transition = 'none'; // Evita animaciones al reiniciar
    loadingBar.style.width = '0';
    setTimeout(() => {
      loadingBar.classList.add('hidden');
    }, 100); // Oculta después de reiniciar
  }

  // Detectar clics en enlaces y mostrar la barra de carga
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'A' && target.href) {
      event.preventDefault(); // Prevenir el comportamiento por defecto
      showLoadingBar();
      setTimeout(() => {
        window.location.href = target.href; // Redirigir después de 1.5 segundos
      }, 1500); // Sincronización con la interacción del usuario
    }
  });

  // Ocultar la barra al cargar la página
  window.addEventListener('load', hideLoadingBar);
