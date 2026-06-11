// Injeta estilos CSS globais específicos para esconder barras de rolagem no navegador (Web)
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    /* Hide scrollbars globally */
    ::-webkit-scrollbar {
      display: none;
    }
    html, body {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE/Edge */
      overflow: hidden;
      margin: 0;
      padding: 0;
      height: 100%;
    }
  `;
  document.head.appendChild(style);
}

export {};
