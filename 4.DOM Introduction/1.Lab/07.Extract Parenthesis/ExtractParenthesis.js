function extract(content) {
    let text = document.getElementById('content').textContent;
    let wordsWithParentheses = text.match(/(\(\w+.*?\w*\))/gm);
    wordsWithParentheses = wordsWithParentheses.map(x => x.slice(1,-1));
    return wordsWithParentheses.join('; ');
}