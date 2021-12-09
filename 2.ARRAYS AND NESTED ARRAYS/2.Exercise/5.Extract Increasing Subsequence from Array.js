function increasingSubsequence(numArray) {
    return numArray.filter((num, index) => num >= numArray[index == 0 ? 0 : index - 1])
}
