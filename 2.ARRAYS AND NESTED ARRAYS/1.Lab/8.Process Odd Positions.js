function processOdd(arrayOfNums) {
    console.log(
        arrayOfNums
            .filter((x, index) => index % 2 != 0)
            .map((x) => x *= 2)
            .reverse());
}