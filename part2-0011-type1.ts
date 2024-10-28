type expert = { name: string, department: string, id: number, title: string, militaryStatus: boolean }

type manager = { name: string, department: string, id: number, title: string }

let worker: expert | manager

worker = { name: "Bengü", department: "Operations", id: 1421, title: "Senior Operations Expert", militaryStatus: false }

console.log(worker)

worker = { name: "Mustafa", department: "FinTech", id: 101, title: "Head of FinTech" }

console.log(worker)

/*

{
  name: 'Bengü',
  department: 'Operations',
  id: 1421,
  title: 'Senior Operations Expert',
  militaryStatus: false
}
{
  name: 'Mustafa',
  department: 'FinTech',
  id: 101,
  title: 'Head of FinTech'
}



*/
