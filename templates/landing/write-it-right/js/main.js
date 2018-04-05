// Base modal non navigation menu
const base_btn_modal = document.querySelector('.base-btn--modal');
const base_close = document.querySelector('.base-close');
const base_modal = document.querySelector('.base-modal');

base_btn_modal.addEventListener("click", baseOpenModal);
base_close.addEventListener("click", baseCloseModal);

function baseOpenModal() {
    base_modal.classList.toggle("open");
    document.body.style.overflow = 'hidden';
}

function baseCloseModal() {
    base_modal.classList.toggle("open");
    document.body.style.overflow = 'auto';
}

// Navigation modal Modal
const btn_modal = document.querySelector('.btn--modal');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');

btn_modal.addEventListener("click", openModal);
close.addEventListener("click", closeModal);

function openModal() {
    modal.classList.toggle("open");
    document.body.style.overflow = 'hidden';
}

// Closes the modal if a link is clicked
for (var item of document.querySelectorAll(".mobile-nav .modal .modal--content li")) {
    item.addEventListener("click", function(evt){
        modal.classList.toggle("open");
        document.body.style.overflow = 'auto';
    }, false);
}

function closeModal(){
    modal.classList.toggle("open");
    document.body.style.overflow = 'auto';
}
