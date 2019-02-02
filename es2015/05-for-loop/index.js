const numArray = [ 1, 2, 3, 4, 5 ];
const numArrayMult2 = [];
const greeting = "Hellow world";

/* for...of */
for (const num of numArray) {
    console.log(`num: ${num}`);
}

for (const num of numArray) {
    numArrayMult2.push(num * 2);
}

for (const char of greeting) {
    console.log(char);
}

/* same result with forEach */
numArray.forEach((num) => {
    console.log(`num: ${num}`);
});

/* same result with traditional for */
for (let index = 0; index < numArray.length; index++) {
    console.log(`num: ${numArray[index]}`);
}
