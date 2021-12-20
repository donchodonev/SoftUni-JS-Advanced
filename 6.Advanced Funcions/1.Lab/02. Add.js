function add(number) {
    return function (input) {
        return number + input;
    };
}