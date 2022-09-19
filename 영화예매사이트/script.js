const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=49a69e11099bff09da12666b0cdb2d56&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=49a69e11099bff09da12666b0cdb2d56&query=';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
  showMovies(data.results);
}

// 영화(data.results) 가져오기
function showMovies(movies) {
  // main 요소에 있던 요소들 없애기
  main.innerHTML = '';

  movies.forEach((item) => {
    const { title, poster_path, vote_average, overview } = item;

    // html 파일에 만들었던 .movie요소를 아래의 코드로 대체하기
    const movieEl = document.createElement('div'); // 빈 div 생성
    movieEl.classList.add('movie'); // div에 클래스명 부여

    movieEl.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}" />

        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassbyRate(vote_average)}">${vote_average}</span>
        </div>

        <div class="overview">
          <h3>개요</h3>
          ${overview}
        </div>
    `;

    // main 요소에, 만든 div.movie 추가
    main.appendChild(movieEl);
  });
}

// 평점에 따라 색 변경을 위한 클래스명 부여 함수
function getClassbyRate(vote) {
  if (vote >= 8) return 'green';
  if (vote >= 5) return 'orange';
  if (vote < 5) return 'red';
}

// 검색란
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    // getMovies 호출 완료후 검색창 비우기
    search.value = '';
  } else {
    // 아무 것도 입력 안하고 엔터치면 새로고침만
    window.location.reload();
  }
});

// https://www.hellodigital.kr/blog/dmkt-general-pagination-vs-infinite-scroll-02/
