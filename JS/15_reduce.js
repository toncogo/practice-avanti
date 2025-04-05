const valores = [2,3,6,9] 

const products = [
    {name:"Cadeira", price: 400},
    {name:"Mesa", price: 600},
    {name:"TV", price: 1900},
]

const somaTotalDosValores = valores.reduce((acc, val) => acc + val, 0)   // 0 é o valor inicial


// console.log(somaTotalDosValores)

const somaTotalDosProdutos = products.reduce((acc, val) => acc + val.price, 0)   // é val.price pois é um array de objeto

console.log(somaTotalDosProdutos)