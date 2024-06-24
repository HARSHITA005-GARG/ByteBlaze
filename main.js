var image = document.getElementById("image");

function changeGraphics(){
    image.src = 'admin.png';
}

function changeSocial(){
    image.src = 'merchant.png';
}
 function changeBrand(){
    image.src = 'driver.png';
 }

 function changeDigital(){
    image.src = 'pwas.png';
 }
function changeSearch(){
  image.src = 'driver.png';
}
function changeOdyssey(){
  image.src = 'pwas.png';
}
function changeMobile(){
image.src = 'driver.png';
}


// nav responsive 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


//popup for send button
