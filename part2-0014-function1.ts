type City = "ankara" | "izmir" | "istanbul" | "adana"

function returnMayor(c: City) : string {

    switch (c.toLocaleLowerCase()) {

        case "ankara":
            return "Mansur Yavaş"
        case "istanbul":
            return "Ekrem İmamoğlu"
        case "izmir":
            return "Cemil Tugay"
        case "adana":
            return "Zeydan Karalar"
        default:
            return "Unknown mayor..."
    }
}

let askMayor1 = returnMayor("ADANA") 

console.log(askMayor1) // Zeydan Karalar

let askMayor2 = returnMayor("Istanbul") 

console.log(askMayor2) // Ekrem İmamoğlu

let askMayor3 = returnMayor("bursa") 

console.log(askMayor3) // Unknown mayor...
