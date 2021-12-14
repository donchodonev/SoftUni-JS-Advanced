function townsToJson(townsArray) {

    let result = [];

    let [head, ...table] = townsArray;

    function regexSplitLine(string) {
        return string.split(/[| ]+[ | ]+/).filter(x => x);
    }

    for (const town of table) {
        [Town, Latitude, Longitude] = regexSplitLine(town);
        Latitude = Number(Number(Latitude).toFixed(2));
        Longitude = Number(Number(Longitude).toFixed(2));

        result.push({ Town, Latitude, Longitude });
    }

    console.log(JSON.stringify(result));
}