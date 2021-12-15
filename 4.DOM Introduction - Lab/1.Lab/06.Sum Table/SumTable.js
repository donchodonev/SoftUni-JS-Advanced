function sumTable() {
    let elements = document.querySelectorAll('table tbody tr td:nth-child(2)');
    let sum = 0;
    for (let i = 0; i < elements.length - 1; i++) {
        sum += Number(elements[i].textContent);
    }

    document.getElementById('sum').textContent = sum;
}