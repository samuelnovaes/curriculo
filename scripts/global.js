const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Exibe ou oculta o menu em dispositivos móveis.
menuToggle.addEventListener('click', () => {
  const display = menu.style.display;
  menu.style.display = display == 'block' ? 'none' : 'block';
});

// Ao redimensionar a janela deve exibir ou ocultar o menu.
window.addEventListener('resize', () => {
  menu.style.display = window.innerWidth >= 1000 ? 'block' : 'none';
});