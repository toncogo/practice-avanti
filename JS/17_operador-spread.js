// copiar um array 

// variaveis

const numeros = [1,2,3,4]

const numeros2 = [5,6,7,8,9] 

const copia = [...numeros]

// console.log(copia)

// concatenação de arrays

const arraysConcatenados = [...numeros, ...numeros2]

// console.log(arraysConcatenados)

// adicionando elementos no array

const novoArray = [10,...arraysConcatenados,30]

console.log(novoArray)

// objetos

const usuario = {nome:"Ana",idade:30}

const copiaUsuario = {...usuario}

// console.log(copiaUsuario)

// modificando objetos 

const usuarioAtualizado = {...usuario,idade:25,cidade:"Florianópolis"}

// console.log(usuarioAtualizado)

const novousuario = {nome:"João",idade:32}

const novosDadosDoUsuario = {genero:"Masculino",DataNascimento:"11/05/2000"} 

const usuarios = {...novousuario, ...novosDadosDoUsuario} // Concatena os dados do novo usuario que não possui propriedades iguais, se for igual um elemento substitui o outro

console.log(usuarios)