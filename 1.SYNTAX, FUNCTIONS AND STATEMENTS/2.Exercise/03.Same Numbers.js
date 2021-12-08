function sameNumbersCheck(number){

    let numStrings = number.toString().split('');

    let numValues = numStrings.map(Number);

    let areNumbersEqual = true;

    for (let index = 1; index < numValues.length; index++) {
        if (numValues[index] != numValues[index - 1]) {
            areNumbersEqual = false;
            break;
        }
    }

    let numSum = numValues.reduce((previous,next) => previous + next);

    console.log(areNumbersEqual);
    console.log(numSum);
}