function calculateAgeOrinputReturn(value: number | string | boolean) {

    if (typeof value === "number") {

        return 2024 - value
    }

    else if (typeof value === "string") {

        return ("Not able to calculate age => user input: " + value)
    }

    else if  (typeof value === "boolean"){

        return ("Not able to calculate age => user input: " + value)
    }
}

console.log(calculateAgeOrinputReturn(2010))

console.log(calculateAgeOrinputReturn("Abc1234"))

console.log(calculateAgeOrinputReturn(false))

// 14
// Not able to calculate age => user input: Abc1234
// Not able to calculate age => user input: false
