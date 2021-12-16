function attachGradientEvents() {

    const gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', onHover);

    function onHover(ev) {
        const target = ev.target;
        const elWidth = target.clientWidth;
        const xOffset = ev.offsetX;

        const result = document.getElementById('result');

        let percent = Math.floor((xOffset / elWidth) * 100);

        result.textContent = `${percent}%`;
    }
}