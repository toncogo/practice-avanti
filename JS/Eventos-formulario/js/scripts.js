const inputForm = document.querySelector("#busca") 

const botaoBusca = document.querySelector("#botaoBusca")

const ResultadoDiv = document.querySelector("#resultado")

inputForm.addEventListener("keydown", (e) => {
    console.log(e.key)
})

inputForm.addEventListener("focus", (e) => {
    inputForm.style.backgroundColor = "#FF0"
    inputForm.style.borderRadius = "1px"
})

inputForm.addEventListener("click", () => {
    inputForm.style.borderColor = "#F00"
    inputForm.style.borderWidth = "solid"
})

inputForm.addEventListener("blur", (e) => {
    inputForm.style.backgroundColor = ""
})

inputForm.addEventListener("mouseenter", () => {
    inputForm.style.borderColor = "#F00"
    inputForm.style.borderRadius = "4px"
}) 

inputForm.addEventListener("mouseleave", () => {
    inputForm.style.borderColor = null   
    inputForm.style.borderRadius = null 
})

function searchResult() {
    const valorBusca = inputForm.value.trim() //Trim tire o espaço da esq e dir
    if(valorBusca) {
        ResultadoDiv.textContent = `Você buscou: ${valorBusca}`
    } else {
        ResultadoDiv.textContent = "Por favor, insira algo na busca."
    }
}

botaoBusca.addEventListener("click", (e) => {
    searchResult()
})