function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll('input[type=button]'));

    buttons.forEach((button) => button.addEventListener('click', onClick));
















    function onClick(ev) {
        const parent = ev.target.parentNode;
        const imposedTimeValue = parent.querySelector('input[type=text').value;
        const imposedTimeFormat = parent.getElementsByTagName('label')[0].htmlFor;

        for (const div of document.querySelectorAll('main div')) {
            const currentTimeFormat = div.getElementsByTagName('label')[0].htmlFor;
            const currentTime = div.querySelector('input[type=text');

            if (currentTimeFormat != imposedTimeFormat) {
                let resultingDifference = calculateDifference(currentTimeFormat, imposedTimeFormat, imposedTimeValue);
                currentTime.value = resultingDifference;
            }
        }
    }

    function calculateDifference(currentTimeFormat, imposedTimeFormat, imposedTime) {
        const imposed = Number(imposedTime);

        if (imposedTimeFormat == 'days') {
            if (currentTimeFormat == 'hours') {
                return imposed * 24;
            } else if (currentTimeFormat == 'minutes') {
                return imposed * 24 * 60;
            } else {
                return imposed * 24 * 60 * 60;
            }
        } else if (imposedTimeFormat == 'hours') {
            if (currentTimeFormat == 'days') {
                return imposed / 24;
            } else if (imposedTimeFormat == 'minutes') {
                return imposed * 60;
            } else {
                return imposed * 60 * 60;
            }
        } else if (imposedTimeFormat == 'minutes') {
            if (currentTimeFormat == 'days') {
                return imposed * 60 * 24;
            } else if (currentTimeFormat == 'hours') {
                imposed * 60;
            } else {
                return imposed / 60;
            }
        } else {
            if (currentTimeFormat == 'days') {
                imposed * 60 * 60 * 24;
            } else if (currentTimeFormat == 'hours') {
                return imposed * 60 * 60;
            } else {
                return imposed * 60;
            }
        }
    }
}