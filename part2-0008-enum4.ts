enum Months {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July"
}

let customer_bilge = {
    name: "Bilge",
    customerID: 4564,
    birthYear: 2000,
    birthMonth: Months.January
}

console.log(customer_bilge.birthMonth) // January
