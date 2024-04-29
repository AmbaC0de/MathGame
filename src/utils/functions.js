// Function to generate a random integer within a specified range
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to choose a random operator from the set {“+”, “-”}
export function getRandomOperatorFrom(operators) {
    // operators = ["+", "-"];
    return operators[Math.floor(Math.random() * operators.length)];
}