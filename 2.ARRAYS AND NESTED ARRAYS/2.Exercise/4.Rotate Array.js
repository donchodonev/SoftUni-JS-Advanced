function rotate(stringArray,rotations){
    for (let i = 0; i < rotations; i++) {
        stringArray.unshift(stringArray.pop());
    }
    console.log(stringArray.join(' '));
}
