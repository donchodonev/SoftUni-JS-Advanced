function getEvenPosElements(array) {
    console.log(
        array
            .filter((el, index) => index % 2 == 0)
            .join(' ')
    );
}