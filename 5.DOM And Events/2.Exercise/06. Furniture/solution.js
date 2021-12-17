function solve() {
  const [inputArea, resultArea] = document.getElementsByTagName('textarea');
  const [generateButton, buyButton] = document.getElementsByTagName('button');
  const data = JSON.parse(inputArea.value);

  generateButton.addEventListener('click', onGenerateClick);
  buyButton.addEventListener('click', onBuyClick);

  function onBuyClick(ev) {
    const resultString = getAllCheckedProductInformationString();
    resultArea.value = resultString;
  }

  function getAllCheckedProductInformationString() {
    const trArray = Array
      .from(document.querySelectorAll('tbody tr td input[type="checkbox"]:checked'))
      .map(x => x.parentNode.parentNode);

    const tds = [];

    for (const tr of trArray) {
      tds.push(
        Array
          .from(tr.children)
          .splice(1, tr.children.length - 2)
          .map(x => x.firstChild.textContent)
      );
    }

    let result = {
      names: [],
      totalPrice: 0,
      totalDecoration: []
    };

    for (let i = 0; i < tds.length; i++) {
      result.names.push(tds[i][0]);
      result.totalPrice += Number(tds[i][1]);
      result.totalDecoration.push(Number(tds[i][2]));
    }

    return `Bought furniture: ${result.names.join(', ')}\nTotalPrice: ${result.totalPrice.toFixed(2)}\nAverage Decoration Factor: ${result.totalDecoration.reduce((acc, c) => acc + c) / result.totalDecoration.length}`
  }

  function onGenerateClick(ev) {
    const parent = document.querySelector('tbody');

    for (const dataItem of data) {
      const row = document.createElement('tr');
      const image = createElement('IMG', dataItem.img);
      const name = createElement('P', dataItem.name);
      const price = createElement('P', dataItem.price, true);
      const decFactor = createElement('P', dataItem.decFactor, true);
      const checkbox = createElement('INPUT', 'checkbox');

      row.appendChild(image);
      row.appendChild(name);
      row.appendChild(price);
      row.appendChild(decFactor);
      row.appendChild(checkbox);

      parent.appendChild(row);
    }
  }

  function createElement(innerObjectType, value, isNumber) {
    const td = document.createElement('td');
    const product = document.createElement(innerObjectType);

    if (product.nodeName === 'IMG') {
      product.src = value;
    } else if (product.nodeName === 'P') {
      isNumber ? product.textContent = Number(value) : product.textContent = value;
    } else if (product.nodeName === 'INPUT') {
      product.setAttribute('type', value)
    }

    td.appendChild(product);

    return td;
  }
}