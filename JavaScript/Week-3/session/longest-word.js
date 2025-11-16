function findLongest(str) {
    const spl = str.split(" ");
    let longest = 0;
    for (let i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length
        }
    }
    return longest;
}
console.log(findLongest("The quick white fox jumped around the massive dog"));
console.log(findLongest("Take me to tinseltown with you"));
console.log(findLongest("Sausage chops"));
console.log(findLongest("Wind your body and wiggle your belly"));
console.log(findLongest("Lets all go on holiday")); 