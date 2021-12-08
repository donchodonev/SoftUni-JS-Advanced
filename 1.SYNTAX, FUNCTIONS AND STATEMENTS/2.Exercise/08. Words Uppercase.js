function extractWordsToUpper(sentence) {

    const regex = /[a-zA-z0-9]{2,}/g;

    let result = sentence.match(regex);

    let upperCased = result.map(x => x.toUpperCase());

    console.log(upperCased.join(', '));
}