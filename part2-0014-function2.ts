type Calculus = (x: number, y: number) => number

let sum: Calculus = function (x, y) {

    return x + y
}

let diff: Calculus = function(x, y) {

    return x - y
}

console.log(sum(12, -8))

console.log(diff(12, -8))
