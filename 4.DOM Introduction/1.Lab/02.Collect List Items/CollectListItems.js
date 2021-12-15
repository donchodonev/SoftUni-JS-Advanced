function extractText() {
    let listNodes = Array.from(document.getElementsByTagName('li'));
    let listNodesText = listNodes.map(x => x.textContent);
    let textArea = document.getElementById('result');
    textArea.textContent = listNodesText.join('\n');
}