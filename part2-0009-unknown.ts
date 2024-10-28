let sales: unknown

let cost: number = 92

// sales = 122 // Unit profit $:  30

// sales = "lorem ipsum" // Sales input must be a number to calculate profit or loss...

if (typeof sales === "number") {

    console.log("Unit profit $: ", sales - cost)

} else {

    console.log("Sales input must be a number to calculate profit or loss...")
}
