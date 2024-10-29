let sales: number

let expectedSales: number = 1000

function control(msg: string) : never {
    throw new Error(msg)
}

function result(sales) {
    if (sales < expectedSales) {
      
        control("No!!!!")
    }

    else {
      
        console.log("Awesome sales...")
    }
}

result(1200) // Awesome sales...

result(400) // Error: No!!!!
