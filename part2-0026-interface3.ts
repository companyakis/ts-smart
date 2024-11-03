interface Employee {
    
    readonly name: string // Careful! Read-only...
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

employee1.department = "Operations"

// Error!

//employee1.name = "XXX" // Cannot assign to 'name' because it is a read-only property.
