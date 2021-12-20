function solve(area, vol, coordinates) {
    let parsedCoordinates = JSON.parse(coordinates);

    return parsedCoordinates.map(calculateAreaAndVolume);

    function calculateAreaAndVolume(figureArray) {
        return {
            area: area.call(figureArray),
            volume: vol.call(figureArray)
        }
    }
}
