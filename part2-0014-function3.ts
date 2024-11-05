// optional & default parameters

type Calculus = (x: number, y: number, z?: number) => number

let sum: Calculus = function (x, y, z=0) {

    return x + y + z
}

let multiplication: Calculus = function(x, y, z=1) {

    return x * y * z
}

let a = 12
let b = 4
let c = 2

console.log("Sum 1: " + sum(a, b, c))

console.log("Sum 2: " + sum(a, b))

console.log("Multiplication 1: ", + multiplication(a, b, c))

console.log("Multiplication 2: ", + multiplication(a, b))

// Sum 1: 18
// Sum 2: 16
// Multiplication 1:  96
// Multiplication 2:  48
