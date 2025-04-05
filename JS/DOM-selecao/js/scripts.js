// seleção por id

const content = document.getElementById("content")

console.log("content",content)

content.innerHTML = `<p>Parágrafo de texto</p>`
content.style.backgroundColor = "#F00"
content.style.fontSize = "30px"

// seleção por classe

const classText = document.getElementsByClassName("text")
console.log("classText",classText)

for(text of classText)
    text.style.color = "#00F"

// seleção por tag

const titles = document.getElementsByTagName("h2")

console.log("titles",titles)

for(title of titles) {
    title.style.fontSize = "40px"
}

// query Selector 

const elementFeature = document.querySelector("#feature")

const newElement = document.createElement("div")

newElement.textContent = "Um novo parágrafo"

elementFeature.append(newElement)

elementFeature.insertAdjacentHTML("beforeend", `
    <div>
        Outro parágrafo criado dinâmicamente
    </div>`)

document.body.insertBefore(newElement,elementFeature)

// query selectorAll

const links = document.querySelectorAll("#links a")

console.log("links",links)
console.log(links[1])

for(link of links) {
    link.classList.add("feature-links")
    console.log(link.getAttribute("href"))
    link.target = "_blank" 
    link.title = link.getAttribute("href").slice(0,-5)
}

// remove

content.remove()

// navegação pelo DOM

const lista = document.querySelector("#links ul")

lista.parentNode.style.backgroundColor = "#F00" // Elemento que está acima do selecionado, Elemento Pai

lista.children // traz todos os filhos que estão dentro da estrutura 

console.log("filho",lista.children)

for(list of lista.children) {
    list.style.fontSize = "50px"
}

lista.firstElementChild.style.fontSize = "20px"