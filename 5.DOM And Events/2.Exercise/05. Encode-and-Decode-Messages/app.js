function encodeAndDecodeMessages() {
    const [encodeSend, decodeRead] = document.getElementsByTagName('button');
    const [inputArea, outputArea] = document.getElementsByTagName('textarea');

    document.getElementById('main').addEventListener('click', onClick);

    function onClick(ev) {
        if (ev.target === encodeSend) {
            const encodedText = encode(inputArea.value);

            inputArea.value = '';
            outputArea.value = encodedText;

        } else if (ev.target === decodeRead) {

            const decodedText = decode(outputArea.value);

            outputArea.value = decodedText;
        }
    }

    function encode(value) {
        return encodedText = Array
            .from(value)
            .map(x => String.fromCharCode(x.charCodeAt(0) + 1))
            .join('');
    }

    function decode(value) {
        return encodedText = Array
            .from(value)
            .map(x => String.fromCharCode(x.charCodeAt(0) - 1))
            .join('');
    }
}