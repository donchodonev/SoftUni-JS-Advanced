function notSingleResponsibility(a,b,c){
    let totalStringLength = a.length + b.length + c.length;
    let averageLengthOfStrings = totalStringLength / 3;
    console.log(Math.floor(totalStringLength));
    console.log(Math.floor(averageLengthOfStrings));
}

notSingleResponsibility('pasta', '5', '22.3');