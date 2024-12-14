const grid = document.getElementById('gameGrid');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const restartBtn = document.getElementById('restartBtn');

const colors = [
  '🦄', '🌟', '🍀', '⚡', '🔥', '🌈', '🌙', '🌻',
  '🍉', '🍓', '🐱', '🐶', '🐻', '🐼', '🦋', '🌸',
  '🎸', '🎨', '🎧', '🚀', '🎮', '📸', '🛸', '⚽',
  '🏀', '🎯', '🎲', '📚', '🖋', '🖼', '🎬', '🎤',
  '🕹', '🍕', '🍔', '🌮', '🍣', '🍦', '🍩', '🍪',
  '🍫', '🍿', '🥐', '🍜', '🥗', '🍉', '🍊', '🍎',
  '🍌', '🥭', '🍇', '🥝', '🍒', '🍓', '🥑', '🥝',
  '🛋', '🛏', '🚲', '🚗', '✈️', '🚂', '🚁', '🚜',
  '🏖', '🏕', '🏰', '🏙', '🏞', '🗽', '🌉', '🌋',
  '⛩', '🕌', '⛲', '⛺', '🏜', '🏝', '🏞', '🌍',
  '🌏', '🌎', '🌋', '🗺', '💌', '💍', '💎', '🎁',
  '🎉', '🎀', '🎊', '🧸', '🎠', '🎡', '🎢', '🎪',
  '🏰', '🎢', '🛍', '👑', '💄', '🧸', '🥂', '🥇'
];
let score = 0;
let flippedCards = [];
let timer = 0;
let timerInterval;

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createCards() {
  const numPairs = window.innerWidth > 768 ? 24 : 8;
  const selectFew = shuffleArray([...colors]).slice(0, numPairs);
  const cardValues = shuffleArray([...selectFew, ...selectFew]);
  grid.innerHTML = '';
  cardValues.forEach(value => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card-inner">
        <div class="front">${value}</div>
        <div class="back"></div>
      </div>
    `;
    card.addEventListener('click', () => handleCardClick(card));
    grid.appendChild(card);
  });
  grid.className = `grid ${window.innerWidth > 768 ? 'large' : 'small'}`;
}

function handleCardClick(card) {
  if (card.classList.contains('flipped') || flippedCards.length === 2) return;
  card.classList.add('flipped');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    const [card1, card2] = flippedCards;
    const value1 = card1.querySelector('.front').textContent;
    const value2 = card2.querySelector('.front').textContent;

    if (value1 === value2) {
      score += 10;
      scoreDisplay.textContent = `Score: ${score}`;
      flippedCards = [];
      setTimeout(() => {
        card1.style.visibility = 'hidden';
        card2.style.visibility = 'hidden';
      }, 700);
    } else {
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        flippedCards = [];
      }, 1200);
    }
  }
}

function startTimer() {
  timer = 0;
  timerDisplay.textContent = `Time: ${timer}s`;
  timerInterval = setInterval(() => {
    timer++;
    timerDisplay.textContent = `Time: ${timer}s`;
  }, 1000);
}

function resetGame() {
  clearInterval(timerInterval);
  score = 0;
  flippedCards = [];
  scoreDisplay.textContent = `Score: ${score}`;
  createCards();
  setTimeout(() => {
    document.querySelectorAll('.card').forEach(card => card.classList.remove('flipped'));
  }, 100);
  startTimer();
}

//restartBtn.addEventListener('click', resetGame);
window.addEventListener('resize', createCards);

resetGame();
