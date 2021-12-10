function printTownAndPopulation(kvpArray){

    let stringDictionary = {};

    for (const item of kvpArray) {

        let [name,population] = item.split(' <-> ');

        population = Number(population);

        if (stringDictionary[name] != undefined) {
            population += stringDictionary[name];
        }

        stringDictionary[name] = population;
    }

    for (const town in stringDictionary) {
            console.log(`${town} : ${stringDictionary[town]}`)
    }
}
