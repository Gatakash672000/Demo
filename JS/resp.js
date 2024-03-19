const burger = document.querySelector('.burger');
const  navContact = document.querySelector('.media-navbar');



burger.addEventListener('click',()=>{

  navContact.classList.toggle('open')

});



const burgerr = document.querySelector('.burger');
const  navLinks = document.querySelector('.nav-list');
const links = document.querySelectorAll('.nav-list  li ');




burgerr.addEventListener('click',()=>{

  navLinks.classList.toggle('open')

  links.forEach(link =>{
link.classList.toggle("fade");
  });

  

});