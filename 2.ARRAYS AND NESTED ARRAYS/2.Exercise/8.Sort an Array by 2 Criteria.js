function sortBy2Criteria(stringArray) {
    
    return stringArray
        .sort(sortByLengthAscendingThenAlphabeticaly)
        .join('\n');

        function sortByLengthAscendingThenAlphabeticaly(a, b) {
            if (a.length == b.length) {
                return a.localeCompare(b, undefined, { sensitivity: 'base' });
            };
    
            return a.length - b.length;
        }
}