burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav =document.querySelector('.rightNav')


burger.addEventListener('click', ()=>{
  rightNav.classList.toggle('vis-class-resp');
  navList.classList.toggle('vis-class-resp');
  navbar.classList.toggle('hei-nav-resp');
})