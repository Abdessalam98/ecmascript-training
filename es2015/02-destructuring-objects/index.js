const userInfos = {
    firstName: "Abdessalam",
    lastName: "Benharira",
    city: "Paris",
    state: "France",
    zipCode: 75010
};

// const {firstName, lastName} = userInfos;
const { firstName: fName, lastName: lName } = userInfos;

console.log(`Hello I'm ${fName} ${lName}`);
