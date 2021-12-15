function solve() {
  const input = document.querySelector('#input').value;
  const sentences = input.split('.').filter(x => x);
  const output = document.querySelector('#output');

  let p = document.createElement('p');
  let counter = 0;

  for (let i = 0; i < sentences.length; i++, counter++) {
    p.textContent += sentences[i] + '.';

    if (counter == 2 || sentences.length - 1 == i) {
      output.appendChild(p);
      counter = -1;
      p = document.createElement('p');
    }
  }
}