const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phoneNumber = document.getElementById('phone_number');

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
function checkEmail(input) {
  const regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/;

  if (regex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, '이메일 형식이 바르지 않습니다.');
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, '필수 정보입니다.');
      // showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${min}글자 이상 입력하세요.`);
  } else if (input.value.length > max) {
    showError(input, `${max}글자를 초과할 수 없습니다.`);
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(password1, password2) {
  if (password1.value !== password2.value) {
    showError(password2, '비밀번호가 일치하지 않습니다.');
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (event) {
  event.preventDefault();

  checkRequired([username, email, password, password2, phoneNumber]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
