function generateCalorieObject(stringArray) {
    const calorie = {};

    for (let i = 0; i < stringArray.length; i+=2) {
        calorie[stringArray[i]] = Number.parseInt(stringArray[i+1]);
    }

    console.log(calorie);
}

generateCalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
generateCalorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);