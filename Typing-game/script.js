const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// 연습 단어
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving',
];

// 초기화
let randomWord;
let score = 0;
let time = 10;

// 배열에서 랜덤으로 단어 가져오기
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// console.log(getRandomWord());

// word를 DOM에 추가하기
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

addWordToDOM();

text.addEventListener('input', (e) => {
  const insertedText = e.target.value;
  // console.log(insertedText);

  // 사용자가 입력한 단어와 랜덤 단어가 일치하면
  if (insertedText === randomWord) {
    // 단어 교체하기
    addWordToDOM();

    // 점수 추가
    updateScore();

    // input창 비우기
    e.target.value = '';
  }
});
