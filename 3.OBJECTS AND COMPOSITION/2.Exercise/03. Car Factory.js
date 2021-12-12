function generateCar(requiredCarObject) {

    const engineArray = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ]

    const carriageArray = [
        { type: 'hatchback', color: '' },
        { type: 'coupe', color: '' }
    ]

    const wheelsArray = new Array(4);

    const resultCar = {};

    resultCar.model = requiredCarObject.model;


    resultCar.engine = engineArray.find(x => x.power >= requiredCarObject.power);
    resultCar.carriage = carriageArray.find(x => x.type == requiredCarObject.carriage);
    resultCar.carriage.color = requiredCarObject.color;
    resultCar.wheels = requiredCarObject.wheelsize % 2 == 0 ?
        wheelsArray.fill(requiredCarObject.wheelsize - 1) :
        wheelsArray.fill(requiredCarObject.wheelsize)

    return resultCar;
}
