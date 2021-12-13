function heroRegister(stringArray){
    const result = [];

    while(stringArray.length){
        [name,level,items] = stringArray.shift().split(' / ')
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({name,level,items});

    }
    console.log(JSON.stringify(result))
}
