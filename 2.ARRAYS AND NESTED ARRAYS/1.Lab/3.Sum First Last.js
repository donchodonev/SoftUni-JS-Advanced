function sumFirstAndLast(stringArray) {
    let firstNum = Number.parseInt(stringArray.shift());
    let lastNum = Number.parseInt(stringArray.pop());
    return firstNum + lastNum;
}