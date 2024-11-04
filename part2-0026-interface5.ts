interface SomeMath {

    (a: number, b: number, c: number) : number
}

const total: SomeMath = (x, y, z) => x + y + z

const squaredSum: SomeMath = (x, y, z) => {
  
    return x*x + y*y + z*z
}

let a = 3
let b = 4
let c = 5

console.log("Sum: " + total(a, b, c))

console.log("Squared sum: " + squaredSum(a, b, c))

// Sum: 12
// Squared sum: 50     
