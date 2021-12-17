function lockedProfile() {
    const main = document.getElementById('main');

    main.addEventListener('click', onClick);

    function onClick(ev) {
        const parent = ev.target.parentNode;
        const checkedRadio = parent.querySelector('input[value="unlock"]');
        const showButton = parent.getElementsByTagName('button')[0];
        const hiddenText = parent.getElementsByTagName('div')[0];

        if (ev.target.nodeName === 'BUTTON' && checkedRadio.checked) {

            if (showButton.textContent == 'Show more') {
                hiddenText.style.display = 'inline';
                showButton.textContent = 'Hide it';
            } else {
                hiddenText.style.display = 'none';
                showButton.textContent = 'Show more';
            }
        }
    }
}