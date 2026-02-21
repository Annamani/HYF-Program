function encrypted(text1) {
    const message = [];
    const text2 = text1.toLowerCase();
    for (let letter of text2) {
        const code = letter.charCodeAt(0);
        const convertCode = code + 1;
        const convertedLetter = String.fromCharCode(convertCode);
        message.push(convertedLetter);
    }
    return message.join('');
}
console.log(encrypted("Fatima"));
console.log(encrypted("Annamani"));
