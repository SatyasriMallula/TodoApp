function getTodo() {
    var todo = new Array;
    var todo_str = localStorage.getItem('todo');
    if (todo_str !== null) {
        todo = JSON.parse(todo_str);
    }
    return todo;
}
function add() {
    var task = document.getElementById("task").value;
    var todo = getTodo();
    todo.push(task);
    localStorage.setItem('todo', JSON.stringify(todo));
    show();
    return false;
}
function clearDefault(a) {
    if (a.defaultValue == a.value) {
        a.value = " ";
    }
};
function remove() {
    var id = this.getAttribute('id');
    var todo = getTodo();
    todo.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todo));
    show()
    return false;
}
function show() {
    var todo = getTodo();
    var html = '<ul>';
    for (let i = 0; i < todo.length; i++) {
        html += '<li>' + todo[i] + '<button class="remove" id="' + i + '">Delete</button> </li>'
    }
    html += '</ul>'
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName("remove");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);

    }
}
document.getElementById('add').addEventListener('click', add);
show();