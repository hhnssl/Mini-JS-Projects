const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
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

// 페이지가 로드되면 인풋창에 자동 포커스
text.focus();

// 카운트 시작, 1초마다 updateTime 호출
const timeInterval = setInterval(updateTime, 1000);

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

// 시간 업데이트
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  // 0초가 되면
  if (time === 0) {
    // 내장함수로 timeInterval함수 끝내기
    clearInterval(timeInterval);

    // 게임 끝내기
    gameOver();
  }
}

// 게임 오버. 점수 및 재시작 버튼 띄우기
function gameOver() {
  endgameEl.innerHTML = `
    <h1>시간 초과</h1>
    <p>최종 점수: ${score}</p>
    <button onclick="location.reload()">다시하기</button>
  `;

  // display: none으로 숨겨놨던 엔드스크린 띄우기
  endgameEl.style.display = 'flex';
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

    // 맞출 때마다 2초 추가
    time += 2;
    updateTime();
  }
});
