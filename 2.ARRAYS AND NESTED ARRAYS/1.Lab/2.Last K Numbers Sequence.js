function lastKNumbersSequence(arrLength, elCountToSum) {

    function sumArrElements(resultArr, startIndex, endIndex) {

        let startIndexValidated = startIndex < 0 ? 0 : startIndex;
        let subArray = resultArr.slice(startIndexValidated, endIndex);
    
        return subArray.reduce((acc, c) => acc + c);
    }

    let resultArr = new Array(arrLength);
    resultArr.fill(0, 0);
    resultArr[0] = 1;
    resultArr[1] = 1;

    for (let i = 2; i < arrLength; i++) {
        resultArr[i] = sumArrElements(resultArr, i - elCountToSum, i);
    }

    return resultArr;
}