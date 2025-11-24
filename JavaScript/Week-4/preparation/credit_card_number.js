const formatCreditCardNumber = (num) => {
    const number = String(num);
    console.log(number);

    const result = [];
    if (number > 0) {
        for (let i = 0; i < number.length; i++) {
            if (i > 0 && i % 4 === 0) {
                result.push(" ");
                result.push(number[i]);
            } else {
                result.push(number[i]);
            }
        }

    } else {
        return "Enter a Valid Number";
    }
    // const resultFinal = parseInt(result.join(""));
    // console.log(typeof resultFinal);
    const resultFinal = result.join("");
    const final = {
        num, resultFinal
    }
    return final;
};

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/