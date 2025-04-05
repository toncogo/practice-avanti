// Criará um novo array com as modificações das nossas regras passadas

const valores = [2,3,6,9] 

const users = [
    {name:"Luciano", age: 40},
    {name:"Pedro", age: 15},
    {name:"Maria", age: 54},
]

const userNames = users.map(user => user.name)

console.log(userNames)

// const valoresDobrados = valores.map(valor => valor * 2)

// console.log(valoresDobrados)