const valores = [2,3,6,9] 

const users = [
    {name:"Luciano", age: 40},
    {name:"Pedro", age: 15},
    {name:"Maria", age: 54},
]

const numerosMaioresQueCinco = valores.filter(num => num >= 5)  // Filtra todos que são maiores ou iguais à cinco

const numerosPares = valores.filter(num => num % 2 === 0)   // Filtra todos os que são pares

console.log(numerosMaioresQueCinco)

console.log(numerosPares)

const menoresDeIdade = users.filter(user => user.age < 18)

console.log(menoresDeIdade)