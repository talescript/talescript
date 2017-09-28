document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    // Load images
    [].forEach.call(document.querySelectorAll('img[data-src]'),
        function (img) {
            img.setAttribute('src', img.getAttribute('data-src'));
            img.onload = function () {
                img.removeAttribute('data-src');
            };
        });
});

window.addEventListener("load", function (event) {
    console.log("All resources finished loading");
});

/* Code not being used.
// Navbar overlay
document.addEventListener("DOMContentLoaded", function(event){
    // Open menu
    //var open = document.querySelector(".openbtn");
    open.addEventListener("click", function openNav(event) {
        var overlay = document.querySelector(".overlay");
        overlay.style.height = "100%";
    });
    // Close menu
    //var close = document.querySelector(".closebtn");
    close.addEventListener("click", function closeNav(event) {
        var overlay = document.querySelector(".overlay");
        overlay.style.height = "0%";
    })
});
*/