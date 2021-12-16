function addItem() {
    const li = document.createElement('li');
    
    const ul = document.getElementById('items');

    const newLiValue = document.getElementById('newItemText').value;

    li.textContent = newLiValue;

    ul.appendChild(li);
}