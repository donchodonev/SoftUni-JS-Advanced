function createAssemblyLine() {

    let assemblyLine = {};

    assemblyLine.hasClima = function (car) {
        car.temp = 21;
        car.tempSettings = 21;
        car.adjustTemp = function () {
            if (car.temp < car.tempSettings) {
                car.temp++;
            }
            else if (car.temp > car.tempSettings) {
                car.temp--;
            }
        }
    };

    assemblyLine.hasAudio = function (car) {
        car.nowPlaying = function () {
            if (car.currentTrack != null) {
                console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
            }
        };

        assemblyLine.hasParktronic = function (car) {
            car.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!")
                } else if (distance < 0.25) {
                    console.log("Beep! Beep!")
                }
                else if (distance >= 0.25 && distance < 0.5) {
                    console.log("Beep!")
                } else {
                    console.log('');
                }
            }
        }
    }

    return assemblyLine;
}

const line = createAssemblyLine();