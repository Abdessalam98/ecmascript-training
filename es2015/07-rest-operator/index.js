function add(nums) {
    const numsArgs = arguments;
    let result = 0;
    let result2 = 0;

    /* method 1 */
    for (const num in numsArgs) {
        if (numsArgs.hasOwnProperty(num)) {
            result += numsArgs[num];
        }
    }

    /* method 2*/
    result2 = [ ...numsArgs ].reduce((res, currentVal) => res + currentVal);

    console.log(result);
    console.log(result2);
}

function mult(...nums) {
    let result = 0;
    result = nums.reduce((res, currentVal) => res * currentVal);

    console.log(result);
}

add(4, 5, 7, 8, 12);
mult(2, 6, 1, 8, 4);
