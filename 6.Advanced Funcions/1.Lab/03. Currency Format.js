function createFormatter(separator, symbol, symbolFirst, formatter) {
    return function newFunction(value) {
        return formatter(separator,
            symbol,
            symbolFirst,
            value);
    }
}
