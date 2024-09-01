const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Função para alterar o ícone do menu.
const toggleIcon = () => {
  menuToggle.style.backgroundImage = menu.style.display == 'block' ? 'url(img/icons/close.svg)' : 'url(img/icons/menu.svg)';
};

// Exibe ou oculta o menu em dispositivos móveis.
menuToggle.addEventListener('click', () => {
  menu.style.display = menu.style.display == 'block' ? 'none' : 'block';
  toggleIcon();
});

// Ao redimensionar a janela deve exibir ou ocultar o menu.
window.addEventListener('resize', () => {
  menu.style.display = window.innerWidth >= 1000 ? 'block' : 'none';
  toggleIcon();
});