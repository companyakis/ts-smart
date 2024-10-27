// Why TS? Examine the code...

function add(x: number, y: number, z:number) : number {

    return x + y + z
}

let a: number = 12.23

let b: number = 2014

let c: number = 32

let d: string = "201"

let result1 = add(a, b, c)

console.log(`${a} + ${b} + ${c} = ${result1}`) // 12.23 + 2014 + 32 = 2058.23

// Error!

// let result2 = add(a, b, d) // Argument of type 'string' is not assignable to parameter of type 'number'
