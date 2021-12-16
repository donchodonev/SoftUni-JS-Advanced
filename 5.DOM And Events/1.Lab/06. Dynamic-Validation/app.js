function validate() {
    const input = document.getElementById('email');

    input.addEventListener('change', onChange);

    function onChange(ev) {
        const target = ev.target;

        const email = target.value;

        const regex = new RegExp(/^[a-z]+@[a-z]+\.[a-z]+$/gm);

        if (regex.test(email)) {
            target.classList.remove('error')
        }
        else {
            target.classList.add('error')
        }
    }
}