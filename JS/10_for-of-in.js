// let frutas = ['banana','maçã','mamão','abacate','pêssego']

// for(let fruta of frutas) {
//     console.log(fruta)
// }

let pessoa = {nome: "João",idade:30,genero:"masculino"}

for(let key in pessoa) {
    console.log(`${key}:${pessoa[key]}`)
}