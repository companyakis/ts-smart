type Greetings = () => string

let shortGreeting: Greetings = function () {
    
    return "Hi!"
}

let longGreeting: Greetings = function () {

    return "Hello! How are you?"
}

console.log(shortGreeting())

console.log(longGreeting())

// Hi!
// Hello! How are you?  
