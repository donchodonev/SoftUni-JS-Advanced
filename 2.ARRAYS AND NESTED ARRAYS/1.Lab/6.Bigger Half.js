function biggerHalf(array) {
    let sliceStartIndex = Math.floor(array.length / 2);

    return array
        .sort((a, b) => a - b)
        .slice(sliceStartIndex, array.length);
}