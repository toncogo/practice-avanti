const content = document.querySelector("#content");

const showButton = document.querySelector("#show");

const hideButton = document.querySelector("#hide");

const hideShowButton = document.querySelector("#hideShowContent");

showButton.addEventListener("click", () => {
    content.classList.add("show")
    content.classList.remove("hide")
})

// showButton.addEventListener("mouseenter", () => {
//     content.classList.add("show")
//     content.classList.remove("hide")
// })

hideButton.addEventListener("click", () => {
    content.classList.add("hide")
    content.classList.remove("show")
})

// hideButton.addEventListener("mouseleave", () => {
//     content.classList.add("hide")
//     content.classList.remove("show")
// })

hideShowButton.addEventListener("click", () => {
    content.classList.toggle("hide")
})