const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=49a69e11099bff09da12666b0cdb2d56&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w51280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=49a69e11099bff09da12666b0cdb2d56&query=';

const form = document.getElementById('form');
const search = document.getElementById('search');

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
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
