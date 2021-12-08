function aggregate(array) {

    let numArr = array.map(Number);

    let numSum = numArr.reduce((previous, next) => previous + next);

    let inverseValuesSum = 0;

    for (let index = 0; index < numArr.length; index++) {
        if (numArr[index] !== 0) {
            inverseValuesSum += (1 / numArr[index]);
        }
    }

    let concatenatedString = numArr.join('');

    console.log(numSum);
    console.log(inverseValuesSum);
    console.log(concatenatedString);
}
aggregate([2, 4, 8, 16]);