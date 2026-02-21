const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What is the "official" name of JavaScript?', value => {
    if (value == 'ECMAScript') {
        console.log('Right!');
    } else {
        console.log("You don't know? ECMAScript!");
    }
    readline.close();
});


