function toggle() {
    let div = document.getElementById('extra');
    let span = document.getElementsByTagName('span')[0];

    if (div.style.display == 'block') {
        div.style.display = 'none';
        span.textContent = 'More';
    } else {
        div.style.display = 'block';
        span.textContent = 'Less';
    }
}