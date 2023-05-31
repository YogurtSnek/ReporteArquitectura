
/* ---------------- Variables ---------------- */
var navbar = document.getElementById("NavBar");
var sticky = navbar.offsetTop;


/* ---------------- Interactions ---------------- */
window.onscroll = function() {
    myFunction()
};
   
   


/* ---------------- Functions ---------------- */
function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}