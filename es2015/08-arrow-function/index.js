const words = [ "spray", "limit", "elite", "exuberant", "destruction", "present" ];

function filterByLength(length, ...words) {
    return words.filter((word) => word.length > length);
}

function addSuffixToWords(suffix, ...words) {
    return words.map((word) => `${word}-${suffix}`);
}

const filteredWords = filterByLength(7, ...words);
const wordsWithSuffix = addSuffixToWords("toto", ...words);

console.log(filteredWords);
console.log(wordsWithSuffix);
