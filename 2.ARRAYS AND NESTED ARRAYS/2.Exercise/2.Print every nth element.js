function printNth(stringArray, offset) {

    let resultArray = [];
    for (let i = 0; i < stringArray.length; i += offset) {
        resultArray.push(stringArray[i]);
    }

    return resultArray;
}
