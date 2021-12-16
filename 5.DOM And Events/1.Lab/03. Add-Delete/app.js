function addItem() {
    const itemTextContent = document.getElementById('newItemText').value;

    const item = elFactory('li', itemTextContent);

    let parent = document.getElementById('items');

    parent.addEventListener('click', removeListItem)

    parent.appendChild(item);

    function removeListItem(ev) {
        const target = ev.target;

        if (target.nodeName == 'A' && target.textContent == '[Delete]') {
            target.parentNode.remove();
        }
    }

    function elFactory(elType, textContent) {
        let el = document.createElement(elType);

        el.textContent = textContent;

        let anchor = document.createElement('a');

        anchor.href = '#';
        anchor.textContent = '[Delete]'

        el.appendChild(anchor);

        return el;
    }
}