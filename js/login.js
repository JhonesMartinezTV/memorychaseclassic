//App desenvovido: Jogo da Memoria GCC para fins de estudo da linguagem -->
//Autor: Jhones Candido Fonseca -->
//Data: 01/04/2023 -->
//Declarações: Declaro que todo conteudo aki foi feito por mim em base a um estudo!! -->

const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);