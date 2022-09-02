const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';

  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email) {
  return /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test(email);
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    // console.log(input.value);
    if (input.value.trim() === '') {
      // trim()은 공백을 없애는 함수인데, 이게 없으면 스페이스만 쳐도 썼다고 인식됨
      // input은 태그 전체, input.id는 태그의 id 속성

      // showError(input, `${input.id} is required`); 대신에 밑에걸 사용하겠음
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Get fieldname: input.id는 username과 같이 단어의 첫번째 글자가 소문자임. 이걸 대문자로 바꾸기 위한 함수
function getFieldName(input) {
  // ex) username
  // input.id.charAt(0).toUpperCase() ==> u 하나만 선택해서 대문자로 바꿈 -> U
  // input.id.slice(1) ==> 첫번째 글자를 제외한 나머지 글자 가져옴 -> sername
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // checkRequired(username);
  // checkRequired(password); ... 이런식으로 함수 한번 호출에 변수 하나만 담아 보내는 게 비효율적이므로
  checkRequired([username, email, password, password2]); // 와 같이 배열로 만들어 보내버린다. (단, checkRequired에서 사용할 때 반복문 필요)
});
