function correctTail(bod, tail) {

    const sub = bod.substr(bod.length - (tail.length));

    if (sub === tail) {
        return true;
    }
    else {
        return false;
    }
}

console.log(correctTail("Fox", "x"));
console.log(correctTail("Rhino", "o"));
console.log(correctTail("Meerkat", "x"));
