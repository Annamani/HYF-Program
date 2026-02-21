function getCharacterFrequencies(text) {
    const freq = {};
    for (const c of text) {

        if (freq[c]) {
            freq[c] = freq[c] + 1
        }
        else {
            freq[c] = 1;
        }

        // ternary
        //freq[c] = (freq[c]) ? freq[c] +1 : 1;


        //freq[c] = (freq[c] || 0) + 1;
    }
    return freq;
}
console.log(getCharacterFrequencies("happy"));
