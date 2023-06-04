/* ---------------- Interactions ---------------- */
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

/* ---------------- Variables ---------------- */
// Get the navbar
var navbar = document.getElementById("NavBar");
var bodyContainer = document.getElementsByClassName("BodyContainer");
var sticker = document.getElementById("NavSticker");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

   


/* ---------------- Functions ---------------- */

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        bodyContainer[0].classList.add("extraPad");
        sticker.setAttribute("style","animation: fadeIn 1s linear 0s 1 normal forwards; pointer-events: initial;");
   
        
        
    } else {
        navbar.classList.remove("sticky");
        bodyContainer[0].classList.remove("extraPad");
        sticker.setAttribute("style","animation: fadeOut 1s linear 0s 1 normal forwards; pointer-events: none;")
          

    }
}