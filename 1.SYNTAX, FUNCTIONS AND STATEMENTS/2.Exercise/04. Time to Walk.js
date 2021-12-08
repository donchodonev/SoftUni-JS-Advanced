function timeToWalk(stepsTaken, stepSize, speedInKm) {

    let totalDistanceInMeters = stepsTaken * stepSize;

    let totalDistanceInKm = (stepsTaken * stepSize) / 1000;

    let minutesNeeded = (totalDistanceInKm / speedInKm) * 60;

    let restingTime = Math.floor(totalDistanceInMeters / 500);

    minutesNeeded += restingTime;

    let totalHours = Math.floor(minutesNeeded / 60);
    let totalMinutes = Math.floor(minutesNeeded - (totalHours * 60));
    let totalSeconds = Math.ceil((minutesNeeded * 60) % 60);

    let hoursAsString = totalHours < 10 ? `0${totalHours}` : totalHours;
    let minutesAsString = totalMinutes < 10 ? `0${totalMinutes}` : totalMinutes;
    let secondsAsString = totalSeconds < 10 ? `0${totalSeconds}` : totalSeconds;

    console.log(`${hoursAsString}:${minutesAsString}:${secondsAsString}`);
}

timeToWalk(2564, 0.70, 5.5);