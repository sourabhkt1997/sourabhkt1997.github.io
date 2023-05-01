let lastKnownScrollPosition = 0;
let ticking = false;

// let navmenu=document.getElementById("nav-menu")
// function doSomething() {
//   navmenu.classList.add("nav-menu-event")
// }

// document.addEventListener("scroll", (event) => {
//   lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });
let project=document.getElementById('projects')

const buttonRight = document.getElementById('next-right');
const buttonLeft = document.getElementById('next-left');

buttonRight.addEventListener("click",()=>{
    
    document.getElementById('projects').scrollLeft+=400
})

buttonLeft.addEventListener("click",()=>{
    
    document.getElementById('projects').scrollLeft-=400
})
 
// buttonLeft.onclick = function () {
//   document.getElementById('container').scrollLeft -= 20;
project.addEventListener('scroll', () => console.log(scrollY))