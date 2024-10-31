const prompt = require ("prompt-sync")({sigint: true})

let userInput: number = 0

while (userInput % 2 === 0) {

    userInput = parseInt(prompt("Enter an even number: ")!);

    console.log(`User number is ${userInput}...`)
}

console.log("Not an even number...")
