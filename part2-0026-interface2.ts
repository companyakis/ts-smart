interface Employee {
    
    name: string
    department: string
    title: string
    salary: number
    isMarried: boolean
    hasChildren?: boolean // optional
}

let employee1: Employee = {

    name: "Ayhan",
    department: "HR",
    title: "Assistant Manager",
    salary: 75000,
    isMarried: false,
    hasChildren: false
}

let employee2: Employee = {

    name: "Bilge",
    department: "Sales",
    title: "Manager",
    salary: 95000,
    isMarried: true,
}
