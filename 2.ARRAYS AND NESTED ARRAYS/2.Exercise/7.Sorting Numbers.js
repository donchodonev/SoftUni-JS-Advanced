function strangeSort(numArray) {
    numArray.sort((a, b) => a - b);

    let strangelySortedArray = [];

    while (numArray.length > 0) {
        strangelySortedArray.push(numArray.shift());

        if (numArray.length == 0) {
            break;
        }

        strangelySortedArray.push(numArray.pop());
    }

    return strangelySortedArray;
}