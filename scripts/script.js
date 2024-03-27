const open = document.querySelector('.open')
const close = document.querySelector('.close')
const navbar = document.querySelector('.navbar')

function openSidebar() {
    open.style.display = "none";
    close.style.display = "block";
    navbar.style.display = "block";
}

function closeSidebar() {
    open.style.display = "block";
    close.style.display = "none";
    navbar.style.display = "none";
}