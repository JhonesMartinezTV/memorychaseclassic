//App desenvovido: Jogo da Memoria GCC para fins de estudo da linguagem -->
//Autor: Jhones Candido Fonseca -->
//Data: 01/04/2023 -->
//Declarações: Declaro que todo conteudo aki foi feito por mim em base a um estudo!! -->

const grid = document.querySelector('.grid'); 
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
    'robo_sentinela_elite',
    'gaian',
    'apostolo_branco',
    'apostolo_sombrio',
    'apostolo_templo',
    'dra_molly',
    'golem_reverso',
    'golem_suspenso',
    'guardiao_do_tempo',
    'robo_sentinela',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element; 
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length == 20) {
        clearInterval(this.loop);
        alert(`Parabens, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML} segundos!!`)
    }

}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter == secondCharacter) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    }else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
        }, 500);
    }
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard == '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard == '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
   
}

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;

}

const loadGame = () => {

    const duplicateCharacters = [...characters, ...characters];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);

    });

}

const startTimer = () => {

    this.loop = setInterval(() => {

        const currentTimer = +timer.innerHTML;
        timer.innerHTML = currentTimer + 1;

    }, 1000);

}

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
  }

