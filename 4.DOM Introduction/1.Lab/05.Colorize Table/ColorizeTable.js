function colorize() {
    let tableRow = document.getElementsByTagName('tr');

    for (let i = 1; i < tableRow.length; i++) {
        if (i % 2 != 0) {
            tableRow[i].style.backgroundColor = 'teal';
        }
    }
}