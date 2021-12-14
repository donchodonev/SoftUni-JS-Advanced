function solve() {

    let baseCharacter = {
        name: "",
        health: 100
    }

    return {
        fighter: function (name) {
            baseCharacter.name = name;
            baseCharacter.stamina = 100;
            baseCharacter.fight = function () {
                baseCharacter.stamina--;
                console.log(`${baseCharacter.name} slashes at the foe!`)
            }
            return baseCharacter;
        },
        mage: function (name) {
            baseCharacter.name = name;
            baseCharacter.mana = 100;
            baseCharacter.cast = function (spell) {
                baseCharacter.mana--;
                console.log(`${baseCharacter.name} cast ${spell}`)
            }
            return baseCharacter;
        }
    }
}
