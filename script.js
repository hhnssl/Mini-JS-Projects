const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement; // -> input의 부모태그를 formControl에 할당. (즉, form-control 이라는 클래스명을 가진 div를 formControl에 할당하겠다는 뜻)

  formControl.className = 'form-control error'; // <- 해당 div 클래스에 form-contorl과 error를 넣어줌.(원래는 form-control만 있었는데 error까지 들어가게끔)

  const small = formControl.querySelector('small'); //해당 div 클래스의 자식에서 small 태그 선택해서 할당

  small.innerText = message; // 원래 들어있던 컨텐츠를 인자로 받은 message로 갈아끼우기~
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email) {
  // js email Regex 검색해서 맘에 드는 거 가져오기
  // 왼쪽의 정규표현식을 email과 비교하는 테스트를 해서 테스트 통과(= 올바른 양식)하면 true 반환, 아니면 false
  return /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test(email);
}

// Event listeners
form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'email is required');
  } else if (!isValidEmail(email.value)) {
    // 유효성 검사에 실패하면(false 반환받으면) 이메일이 유효하지 않다는 매세지 띄우기
    showError(email, 'Email is not valid ! !');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'password is required');
  } else {
    showSuccess(password);
  }

  if (password2.value === '') {
    showError(password2, 'password is required');
  } else {
    showSuccess(password2);
  }
});
