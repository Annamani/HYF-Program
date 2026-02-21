function funWithComma(input) {

    // const words = input.split(" ");
    // if (words.length === 1) {
    //     return words[0];
    // }
    // const lastWord = words.pop();
    // const output = words.join(", ") + " and " + lastWord;
    // return output;

    const length = input.length;
    let output = "";
    for (let i = 0; i < length; i++) {
        if (input[i] == " ") {
            output += "," + input[i];
        }
        else {
            output += input[i];
        }


    }
    const lastWord = output.split(", ").pop();
    return output;
    // return output + " and "+ lastWord;
}

// Test cases
console.log(funWithComma("one two three"));           // "one, two and three"
console.log(funWithComma("1 2 3 4 5 6"));            // "1, 2, 3, 4, 5, and 6"
console.log(funWithComma("apples peaches plums pears")); // "apples, peaches, plums and pears"
console.log(funWithComma("one two"));                 // "one and two"
console.log(funWithComma("one"));          