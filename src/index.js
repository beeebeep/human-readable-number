module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }

    let littleNums = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let decimalNames = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let depth = ["", "hundred", "thousand"];

    let hrn = "";

    let currentDepth = 0;

    while (true) {
        if (number % 100 !== 0) {
            let t = "";
            if (number % 100 < 20) {
                t = littleNums[number % 100];
            } else {
                t =
                    decimalNames[((number / 10) ^ 0) % 10] +
                    (littleNums[number % 10] === "" ? "" : " ") +
                    littleNums[number % 10];
            }
            hrn =
                t +
                (depth[currentDepth] === "" ? "" : " ") +
                depth[currentDepth] +
                (hrn === "" ? "" : " ") +
                hrn;
        }
        number = (number / 100) ^ 0;
        if (number === 0) {
            break;
        }
        currentDepth++;
    }

    return hrn;
};
