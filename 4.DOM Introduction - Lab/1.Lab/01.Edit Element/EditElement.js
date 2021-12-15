function editElement(element,matchString,replacer) {
    let regex = new RegExp(matchString,'g');
    element.textContent = element.textContent.replace(regex,replacer);
}