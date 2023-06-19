
// Compétences

const items = document.querySelectorAll('.slider img');
const nbSlide = items.length;
const suivante = document.querySelector(".right");
const precedente = document.querySelector(".left");
let count = 0;

function slideSuivante() {
    items[count].classList.remove("active");

    if (count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add("active")
}

suivante.addEventListener("click", slideSuivante)



function slidePrecedente() {
    items[count].classList.remove("active");

    if (count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add("active")
}

precedente.addEventListener("click", slidePrecedente)

function keyPress(e){
    if(e.keyCode === 37){
        slidePrecedente();
    } else if (e.keyCode === 39){
        slideSuivante();
    }
}

document.addEventListener("keydown", keyPress )

//Formulaire
function form() {
    let boite = document.querySelector(".boite");
    boite.classList.toggle("form")
}
console.log(form)

// projets

let allMobileDivs = document.querySelectorAll(".mobile")
let allCardsDivs = document.querySelectorAll(".card")
let allTextesDivs = document.querySelectorAll(".texte")

console.log(allMobileDivs)

function afficher(quoi) {
    
    allMobileDivs[quoi].classList.toggle("active")
    allCardsDivs[quoi].classList.toggle("actif") 
    allTextesDivs[quoi].classList.toggle("read")
};

// color
let article = document.querySelector("article");
let nav = document.querySelector("nav");
let section = document.querySelector("section");
let container = document.querySelector(".container")
let formulaire = document.querySelector("form");

function green() {
    nav.classList.toggle("green")
    article.classList.toggle("green")
    section.classList.toggle("green")
    container.classList.toggle("green")
    formulaire.classList.toggle("green")
    text.classList.toggle("green")
}

function red() {
    nav.classList.toggle("red")
    article.classList.toggle("red")
    section.classList.toggle("red")
    container.classList.toggle("red")
    formulaire.classList.toggle("red")
    text.classList.toggle("red")
}

function dark() {
    nav.classList.toggle("dark")
    article.classList.toggle("dark")
    section.classList.toggle("dark")
    container.classList.toggle("dark")
    formulaire.classList.toggle("dark")
    text.classList.toggle("dark")
}

function salmon() {
    nav.classList.toggle("salmon")
    article.classList.toggle("salmon")
    section.classList.toggle("salmon")
    container.classList.toggle("salmon")
    formulaire.classList.toggle("salmon")
    text.classList.toggle("salmon")
}

function yellow() {
    nav.classList.toggle("yellow")
    article.classList.toggle("yellow")
    section.classList.toggle("yellow")
    container.classList.toggle("yellow")
    formulaire.classList.toggle("yellow")
    text.classList.toggle("yellow")
}

function white() {
    nav.classList.toggle("white")
    article.classList.toggle("white")
    section.classList.toggle("white")
    container.classList.toggle("white")
    formulaire.classList.toggle("white")
    text.classList.toggle("white")
}

function pink() {
    nav.classList.toggle("pink")
    article.classList.toggle("pink")
    section.classList.toggle("pink")
    container.classList.toggle("pink")
    formulaire.classList.toggle("pink")
    text.classList.toggle("pink")
}

function blue() {
    nav.classList.toggle("blue")
    article.classList.toggle("blue")
    section.classList.toggle("blue")
    container.classList.toggle("blue")
    formulaire.classList.toggle("blue")
    text.classList.toggle("blue")
}

