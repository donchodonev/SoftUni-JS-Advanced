function focused() {
    const divs = Array.from(document.querySelectorAll('div input'));

    divs.forEach(function (div) {
        div.addEventListener('focus', onFocus);
        div.addEventListener('blur', onBlur);
    });

    function onFocus(ev) {
        const parent = ev.target.parentNode;
        parent.classList.add('focused');
    }

    function onBlur(ev) {
        const parent = ev.target.parentNode;
        parent.classList.remove('focused');
    }
}