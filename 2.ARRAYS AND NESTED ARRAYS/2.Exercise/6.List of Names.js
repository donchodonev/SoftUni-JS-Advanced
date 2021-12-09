function printNamesSorted(nameArray) {
    let result = nameArray
        .sort((a, b) => a.localeCompare(b))
        .reduce((acc, c, index) => {
            acc.push(`${index + 1}.${c}`)
            return acc
        }, []);

    console.log(result.join('\n'));
}

printNamesSorted(["John", "Bob", "Christina", "Ema"])