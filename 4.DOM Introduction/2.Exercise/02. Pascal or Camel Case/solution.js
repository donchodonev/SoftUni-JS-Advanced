function solve() {
  let wordsToConvert = document
    .getElementById('text')
    .value
    .split(' ')
    .map(x => x.toLowerCase());

  let namingCase = document
    .getElementById('naming-convention')
    .value;

  wordsToConvert = convertToCase(wordsToConvert, namingCase);

  document.getElementById('result').textContent = wordsToConvert;

  function convertToCase(wordsToConvert, namingCase) {
    if (namingCase == "Camel Case") {
      for (let i = 1; i < wordsToConvert.length; i++) {
        wordsToConvert[i] = wordsToConvert[i][0].toUpperCase() + wordsToConvert[i].slice(1)
      }
    } else if (namingCase == "Pascal Case") {
      for (let i = 0; i < wordsToConvert.length; i++) {
        wordsToConvert[i] = wordsToConvert[i][0].toUpperCase() + wordsToConvert[i].slice(1)
      }
    } else {
      return 'Error!';
    }

    return wordsToConvert.join('');
  }
}