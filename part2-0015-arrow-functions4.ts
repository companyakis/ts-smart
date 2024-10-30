const words = ["again", "yeni", "lorem", "bugün", "ceteris"]

const containsE = words.filter((w) => w.includes('e'))

console.log(containsE) // [ 'yeni', 'lorem', 'ceteris' ]
