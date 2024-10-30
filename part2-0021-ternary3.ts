let sales: number

// sales = 40000 // Sales amount: 40000 => sales premium: 0

sales = 70000 // Sales amount: 70000 => sales premium: 3500

let salesPremium: number = sales > 50000 ? sales * 0.05 : 0

console.log(`Sales amount: ${sales} => sales premium: ${salesPremium}`) 
