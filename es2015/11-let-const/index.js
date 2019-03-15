// Scope

if (true) {
	var var0 = 2;
}

if (true) {
	let var1 = 3;
}

console.log({ var0 });

// ReferenceError: example1 is not defined
// console.log({ var1 });

// const

const myArray = [ 1, 2, 3, 4 ];
console.log({
	myArray
});

myArray.push(5);

console.log({
	myArray
});

myArray.length = 2;

console.log({
	myArray
});

// TypeError: Assignment to constant variable
// myArray = [ 1, 1, 0 ];
