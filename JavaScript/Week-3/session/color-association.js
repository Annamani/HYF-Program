function colourAssociation(array) {
    // We <3 colours..
    const output = [];
    for (let i = 0; i < array.length; i++) {
        const key = array[i][0];
        const value = array[i][1];
        const obj = {
            [key]: value
        }
        output.push(obj);
    }
    return output;
    // return Object.fromEntries(array);
}

const input1 =
    [
        ["white", "goodness"],
        ["blue", "tranquility"]
    ];

const input2 = [
    ["red", "energy"],
    ["yellow", "creativity"],
    ["brown", "friendly"],
    ["green", "growth"]
];


console.log(colourAssociation(input1)); // [{white:"goodness"},{blue:"tranquility"}]
console.log(colourAssociation(input2)); // [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]