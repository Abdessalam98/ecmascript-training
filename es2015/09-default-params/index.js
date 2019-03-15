function fillUser(username) {
    username = username || "person";
    return username;
}

function greeting(title) {
    console.log(`${title} ${fillUser("Abdessalam")}`);
}

// Be careful with default values when type is boolean

function setDefaultValue(value) {
    value = value || "toto";
    console.log(value);
}

function setBoolean(value) {
    value = value === undefined ? false : value;
    console.log({ value });
}

greeting("Hello");
setDefaultValue(false);
setBoolean(false);
