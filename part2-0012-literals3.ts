function companyCities(city: "istanbul" | "adana" | "ankara") : void {

    console.log("We have an operation team in ", city.toLocaleUpperCase())
}

companyCities("adana")

companyCities("ankara")

//companyCities("izmir") => Argument of type '"izmir"' is not assignable to parameter of type '"istanbul" | "adana" | "ankara"'
