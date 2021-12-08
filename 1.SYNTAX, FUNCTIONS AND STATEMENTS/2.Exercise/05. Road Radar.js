function checkSpeed(speed, area) {

    function checkSpeedDifference(speedDifference) {
        if (speedDifference <= 20) {
            return 'speeding';
        }
        else if (speedDifference > 20 && speedDifference <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }

    let residentialSpeedLimit = 20;
    let citySpeedLimit = 50;
    let interstateSpeedLimit = 90;
    let motorwaySpeedLimit = 130;


    let isAboveMotorwayLimit = speed > motorwaySpeedLimit ? true : false;
    let isAboveInterstateLimit = speed > interstateSpeedLimit ? true : false;
    let isAboveCityLimit = speed > citySpeedLimit ? true : false;
    let isAboveResidentialLimit = speed > residentialSpeedLimit ? true : false;

    let resultString;

    let status;

    if (area == 'residential') {

        if (isAboveResidentialLimit) {

            let residentialSpeedDifference = speed - residentialSpeedLimit;

            resultString = `The speed is ${residentialSpeedDifference} km/h faster than the allowed speed of ${residentialSpeedLimit} - ${checkSpeedDifference(residentialSpeedDifference)}`;
        } else {

            resultString = `Driving ${speed} km/h in a ${residentialSpeedLimit} zone`;
        }

    } else if (area == 'city') {

        if (isAboveCityLimit) {

            let citySpeedDifference = speed - citySpeedLimit;

            resultString = `The speed is ${citySpeedDifference} km/h faster than the allowed speed of ${citySpeedLimit} - ${checkSpeedDifference(citySpeedDifference)}`;
        } else {

            resultString = `Driving ${speed} km/h in a ${citySpeedLimit} zone`;
        }

    } else if (area == 'interstate') {

        if (isAboveInterstateLimit) {

            let interstateSpeedDifference = speed - interstateSpeedLimit;

            resultString = `The speed is ${interstateSpeedDifference} km/h faster than the allowed speed of ${interstateSpeedLimit} - ${checkSpeedDifference(interstateSpeedDifference)}`;
        } else {

            resultString = `Driving ${speed} km/h in a ${interstateSpeedLimit} zone`;
        }
    } else {

        if (isAboveMotorwayLimit) {

            let motorwaySpeedDifference = speed - motorwaySpeedLimit;

            resultString = `The speed is ${motorwaySpeedDifference} km/h faster than the allowed speed of ${motorwaySpeedLimit} - ${checkSpeedDifference(motorwaySpeedDifference)}`;
        } else {

            resultString = `Driving ${speed} km/h in a ${motorwaySpeedLimit} zone`;
        }
    }

    console.log(resultString);
}

checkSpeed(200, 'motorway');