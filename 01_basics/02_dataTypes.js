"use strict"; // treat all js as newer version

// alert("hello") // we are useing Node.js 

let name = "arvind sharma"
let age = 26
let isLoggedIn = false
let state

// Number -> 2 to power of 53
// bigint
// string -> ""
// boolean -> true/false
// null -> standalone value
// undefined 
// symbol -> unique

console.log(typeof undefined) // undefined
console.log(typeof null) // Object

const likebutton = document.getElementsByClassName("pld-like-trigger")
const whatsappbtn = document.createElement('a')
whatsappbtn.setAttribute('href', 'https://wa.me/9158044677')
whatsappbtn.classList = "elementor-icon elementor-animation-bounce-in"
whatsappbtn.innerHTML =  '<i aria-hidden="true" class="fab fa-whatsapp"></i>'
likebutton.insertAdjacentElement('afterend', whatsappbtn)