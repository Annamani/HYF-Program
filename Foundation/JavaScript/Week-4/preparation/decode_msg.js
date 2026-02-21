function decode(message) {
    let docodedMessage = "";

    for (let i = 0; i < message.length; i++) {
        //decode this message "Ifmmp ufan33, zpvs asf po njttjpo up mfaso kawatdsjqu"
        if (message[i] === ' ') {
            docodedMessage += ' ';
            continue;
        }
        while (message[i] >= '0' && message[i] <= '9') {
            docodedMessage += message[i];
            i++;;
        }
        if (message[i] === ',') {
            docodedMessage += ',';
            continue;
        }
        if (message[i] === "a") {
            docodedMessage += 'a';
            continue;
        }
        const letter = message[i]; // b
        const code = letter.charCodeAt(0) // 98
        const convertCode = code - 1; // 97
        const convertedLetter = String.fromCharCode(convertCode);
        docodedMessage += convertedLetter;
    }
    return docodedMessage;
}
const secretAgent = "boobnboj";
console.log(decode(secretAgent));
console.log(decode("Ifmmp ufan33, zpvs asf po njttjpo up mfaso kawatdsjqu"));
