function pieceOfPie(arrayOfPies, startIndexPieName, endIndexPieName) {
    let startIndex = arrayOfPies.indexOf(startIndexPieName);
    let endIndex = arrayOfPies.indexOf(endIndexPieName);

    return arrayOfPies.slice(startIndex, endIndex + 1);
}