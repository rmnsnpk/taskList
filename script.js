function add() {
    let item = document.createElement('div');
    item.className = "task";
    item.innerHTML = document.getElementById('name').value;
    document.getElementById('name').value = "";
    item.onclick = lineThrough;
    form.after(item);
    let delBtn = document.createElement('img');
    delBtn.src = '/icons/can.png';
    delBtn.className = 'can';
    delBtn.onclick = del;
    item.append(delBtn);
    return false;
}

submit.onclick = add;


function lineThrough() {
    if (this.style.textDecoration == 'line-through') {
        this.style.textDecoration = 'none';
    } else {
        this.style.textDecoration = 'line-through';
    }

}

function del() {
    this.parentNode.remove()
}