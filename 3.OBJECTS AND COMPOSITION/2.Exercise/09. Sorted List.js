function createSortedList() {
    let list = {};

    list.size = 0;

    list.elements = new Array();

    list.add = function (newElement) {
        this.elements.push(newElement);
        this.size++;
        this.elements.sort((a, b) => a - b);
    }

    list.remove = function (index) {
        if (isIndexValid(index, this.size)) {
            this.elements.splice(index, 1);
            this.size--;
        }
    }

    list.get = function (index) {
        if (isIndexValid(index, this.size)) {
            return this.elements[index];
        }
    }

    function isIndexValid(index, elementsLength) {
        return index >= 0 && index < elementsLength;
    }

    return list;
}
