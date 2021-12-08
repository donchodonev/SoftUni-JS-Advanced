function calculateCircleArea(num) {

    let result;

    if (typeof (num) == 'number') {
        result = ((num ** 2) * Math.PI).toFixed(2);
    }
    else {
        result = `We can not calculate the circle area, because we receive a ${typeof (num)}.`;
    }

    console.log(result);
}