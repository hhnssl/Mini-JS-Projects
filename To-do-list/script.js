const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;
  // console.log(todo.text);
  // console.log(todo);

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement('li');

    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }
    console.log(todo);

    todoEl.innerText = todoText;

    // 토글해서 완료로 바꿨다가 복구시키기
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
    });

    // 삭제하기
    todoEl.addEventListener('contextmenu', (e) => {
      // contextmenu: 오른족 클릭하면 나오는 속성목록 안 띄우기
      e.preventDefault();

      todoEl.remove();
    });

    todosUL.appendChild(todoEl);
    input.value = '';
  }
}
