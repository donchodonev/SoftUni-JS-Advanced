function printNamesSorted(nameArray) {
    let result = [];

    nameArray
        .sort((a,b) => a.localeCompare(b))
        .reduce((acc, c, index) => result.push(`${index + 1}.${c}`), []);

    console.log(result.join('\n'));
}

printNamesSorted(["John", "Bob", "Christina", "Ema"])