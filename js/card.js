document.querySelectorAll('.box-container').forEach((container) => {
  const rightButton = container.querySelector('.right-button');
  const leftButton = container.querySelector('.left-button');
  const contents = container.querySelectorAll('.content');

  // Clique no botão ⟶ ativa .right-open e anima os textos
  rightButton.addEventListener('click', () => {
    container.classList.add('right-open');
    contents.forEach((content) => content.classList.add('text-in'));
  });

  // Clique no botão ⟵ remove .right-open e também remove animação se quiser
  leftButton.addEventListener('click', () => {
    container.classList.remove('right-open');
    contents.forEach((content) => content.classList.add('text-in'));
  });
});
