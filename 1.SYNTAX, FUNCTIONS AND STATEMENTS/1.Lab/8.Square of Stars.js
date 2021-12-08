function printSquare(size = 5) {

    let star = '*';

    for (let index = 0; index < size; index++) {

        let result = '';

        for (let inner = 0; inner < size; inner++) {
            result += ` ${star}`;
        }

        result = result.trimStart();
        result = result.trimEnd();

        console.log(result);
    }
}

printSquare(2);