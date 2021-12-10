const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    },
];

function objectFactory(library, orders) {
    let objArray = [];

    for (const order of orders) {
        let newObject = order.template;

        for (const fn of order.parts) {
            newObject[fn] = library[fn]
        };
        
        objArray.push(newObject)
    }

    return objArray;
}

let products = objectFactory(library, orders);

console.log(products);