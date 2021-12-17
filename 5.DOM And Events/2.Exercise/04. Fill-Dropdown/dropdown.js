function addItem() {
    const addButton = document.querySelector('input[value="Add"]');

    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.textContent = text.value;
    option.value = value.value;

    const selectMenu = document.getElementById('menu');

    selectMenu.appendChild(option);

    text.value = '';
    value.value = '';
}
