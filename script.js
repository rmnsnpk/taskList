function add() {
    let li = document.createElement('li');
    li.className = "task";
    li.innerHTML = document.getElementById('name').value;
    return list.append(li);
}

submit.onclick = add;