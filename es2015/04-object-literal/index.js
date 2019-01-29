/* eslint-disable no-console */
function fullName(firstName, lastName) {
    const fullName = {firstName, lastName};
    return fullName;
}

function greeting(name) {
    const {firstName, lastName} = name;

    const myGreeting = {
        firstName,
        lastName
    };
    console.log(`Hello I'm ${myGreeting.firstName} ${myGreeting.lastName}`);
}

greeting(fullName("Abdessalam", "Benharira"));
