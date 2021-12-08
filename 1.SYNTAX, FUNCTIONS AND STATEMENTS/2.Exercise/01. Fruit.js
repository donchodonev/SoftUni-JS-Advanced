function buyFruit(fruitType, grams, priceForKilogram) {
    let kilograms = grams / 1000;
    let moneyNeeded = kilograms * priceForKilogram


    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruitType}.`);
}