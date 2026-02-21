function reverseWords(words) {
    const length = words.length;
    let reverse = "";
    for (let i = words.length - 1; i >= 0; i--) {
        if (i === 0) {
            reverse = reverse + words[i];
            break;
        }
        reverse = reverse + words[i] + ", ";
    }
    return reverse;

}


// Test case
const input = ["God", "Wolf", "Rail", "Gum", "Maps", "Live"];
const reversedArray = reverseWords(input);
console.log(reversedArray);
// for (let i = 0; i < input.length; i++) {
//     console.log(reverseWords(input[i]))
// }
