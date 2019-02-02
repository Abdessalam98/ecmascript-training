const numArray1 = [ 1, 2, 3, 4, 5, 6 ];
// const numArray2 = numArray1; // copy by reference
const numArray2 = [ ...numArray1 ]; // copy by values

const colors = [ "red", "green", "blue" ];

numArray1.push(7);
numArray2.push("toto");

console.log(numArray1);
console.log(numArray2);

function setColors(c1, c2, c3) {
    return `Color 1 is: ${c1}
Color 2 is: ${c2}
Color 3 is: ${c3}`;
}

console.log(setColors(...colors));

const example1 = {
    firstName: "Dylan"
};

const example2 = {
    ...example1
};

console.log({ example1, example2 });

const customer1 = { name: "John", email: "john@doe.com" };
const customer2 = { name: "Mary", email: "mary@jane.com" };

function setCustomer(name, email) {
    console.log(`${name}, ${email}`);
}

setCustomer(...Object.values(customer1));
setCustomer(...Object.values(customer2));
