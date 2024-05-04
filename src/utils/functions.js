// Function to generate a random integer within a specified range
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to choose a random operator from the set {“+”, “-”}
export function getRandomOperatorFrom(operators) {
    // operators = ["+", "-"];
    return operators[Math.floor(Math.random() * operators.length)];
}

export  function generateQuestionAndResponse(operands, operators) {
    let response = operands[0];
    let question = operands[0].toString();

    for (let i = 0; i < operators.length; i++) {
        response += ` ${operators[i]} ${operands[i + 1]}`;
        question += ` ? ${operands[i + 1]}`;
    }

    const result = eval(response);

    question += ` = ${result}`;

    question = question.split(" ");

    return {question, response };
}
