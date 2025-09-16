// step 1: get the things

const hamburgerButton = document.getElementById("hamburger-button")
const mobileMenu = document.getElementById("mobile-menu")

// step 2: add event listeners

hamburgerButton.addEventListener("click", (event)=>{
    event.preventDefault()


    console.log("you clicked it!")

    mobileMenu.classList.toggle("hidden")


})
