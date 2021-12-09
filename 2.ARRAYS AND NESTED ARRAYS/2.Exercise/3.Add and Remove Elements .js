function addRemoveElements(commandArray) {
    let numArray = [];
    let currentNumber = 1;

    commandArray.forEach(command => {
        if (command == 'add') {
            numArray.push(currentNumber);
        } else {
            numArray.pop(currentNumber);
        }
        currentNumber++;
    });

    if (numArray.length == 0) {
        console.log('Empty');
    } else {
        console.log(numArray.join('\n'));
    }
}
