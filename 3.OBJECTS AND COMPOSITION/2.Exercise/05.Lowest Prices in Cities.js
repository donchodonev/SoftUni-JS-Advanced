function productLowestPriceAndCity(dataArray) {

    let data = [];

    while (dataArray.length) {

        [townName, productName, productPrice] = dataArray.shift().split(' | ');

        productPrice = Number(productPrice);

        let lowerPriceTown = data.findIndex(x => x.productName == productName);

        if (lowerPriceTown != -1) {

            if (data[lowerPriceTown].productPrice > productPrice) {
                data[lowerPriceTown].townName = townName;
                data[lowerPriceTown].productPrice = productPrice;
            } else {
                continue;
            }
        } else {
            data.push({ townName, productName, productPrice });
        }
    }

    data.forEach((data) => console.log(`${data.productName} -> ${data.productPrice} (${data.townName})`))
}
