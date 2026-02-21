const positiveWordsList = ["happy", "awesome", "super", "good"];

const negativeWordsList = ["hate", "boring", "bad"];

const getSentimentScore = (input) => {
    const words = input.toLowerCase().split(" ");

    let score = 0;
    const positiveWords = [];
    const negativeWords = [];


    for (let word of words) {

        if (!(word.at(0) >= 'a' && word.at(0) <= 'z')) {
            console.log(word)
            word = word.slice(1);
        }

        if (!(word.at(word.length - 1) >= 'a' && word.at(word.length - 1) <= 'z')) {
            console.log(word)
            word = word.slice(0, word.length - 1);
        }

        if (positiveWordsList.includes(word)) {
            score += 1;
            positiveWords.push(word);
        } else if (negativeWordsList.includes(word)) {
            score -= 2;
            negativeWords.push(word);
        }
    }

    return {
        score: score,
        positiveWords: positiveWords,
        negativeWords: negativeWords,
    };
};


console.log(getSentimentScore("i am good"));
console.log(getSentimentScore("I am mega super awesome, !happy but I hate doing boring stuff"));