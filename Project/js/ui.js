//Arayüzle ilgili JS

    //Navbar

    //Navbar açma buttonu
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})

    //Navbar kullanıcı ekranı Dropdown Click
const dropdownToggle = document.getElementById('userbtn');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownToggle.addEventListener('click',() => {
    dropdownMenu.classList.toggle("dropdown-menu-show");
})