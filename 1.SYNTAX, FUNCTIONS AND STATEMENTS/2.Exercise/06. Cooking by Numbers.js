function cook(number, command1, command2, command3, command4, command5) {

    let num = Number(number);

    let commandArray = [command1, command2, command3, command4, command5];

    for (let index = 0; index < commandArray.length; index++) {

        switch (commandArray[index]) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num *= 0.80;
                break;
        }

        console.log(num);
    }
}