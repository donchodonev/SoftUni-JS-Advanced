function storeCatalogue(inputData) {
    let result = {};

    while (inputData.length) {
        let [name, price] = inputData.shift().split(' : ');

        const firstLetter = name[0];

        if (!result[firstLetter]) {
            result[firstLetter] = [];
        }

        result[firstLetter].push({ name, price: Number(price) })
        result[firstLetter].sort((a, b) => (a.name).localeCompare(b.name));
    }

    let dictionaryKeys = Object.keys(result).sort((a, b) => a.localeCompare(b));

    for (const key of dictionaryKeys) {
        console.log(key);

        for (const productAndPrice of result[key]) {
            console.log(`  ${productAndPrice.name}: ${productAndPrice.price}`);
        }
    }
}
