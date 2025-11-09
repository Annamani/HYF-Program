const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter a number: ', value => {
    const number = value
    if (number > 0) {
        console.log('The number is positive.');
    } else if (number < 0) {
        console.log('The number is negative.');
    } else {
        console.log('The number is zero.');
    }
    readline.close();
});