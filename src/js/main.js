// Navbar overlay
document.addEventListener("DOMContentLoaded", function(event){
    // Open menu
    var open = document.querySelector(".openbtn");
    open.addEventListener("click", function openNav(event) {
        var overlay = document.querySelector(".overlay");
        overlay.style.height = "100%";
    });
    // Close menu
    var close = document.querySelector(".closebtn");
    close.addEventListener("click", function closeNav(event) {
        var overlay = document.querySelector(".overlay");
        overlay.style.height = "0%";
    })
});
