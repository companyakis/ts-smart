interface CalculatorInterface {

    add(x: number, y: number): number

    subtract(x: number, y: number): number

    multiply(x: number, y: number): number

    divide(x: number, y: number): number

}

const calculator: CalculatorInterface = {

    add(x, y) {
        return x + y
    },

    subtract(x, y) {
        return x - y
    },

    multiply(x, y) {
        return x * y
    },

    divide(x, y) {

        if (y === 0) {
            throw new Error("Zero division error... y value can't be zero!")
        }
        else {
            return x / y
        }
    }

}

let a: number = 72
let b: number = 5
let c: number = 0

console.log(calculator.add(a, b)) // 77

console.log(calculator.divide(a, b)) // 14.4

console.log(calculator.divide(a, c)) // throw new Error("Zero division error... y value can't be zero!");
