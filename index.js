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

gsheeturl="https://script.google.com/macros/s/AKfycbwZDgwQ7CJqm8WaVxYtCIlQpUZFBFRwHRVOse7qEaHSY72WRZ44neVF9sZNTvR01WTOpg/exec"

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    let button=document.getElementById("submit")
    button.value="submitting"
  e.preventDefault();
  fetch(gsheeturl, { method: 'POST', body: new FormData(form) })
    .then(res => res.json())
    .then(data => {
      console.log(data.message);
      button.value="submitted"
      setTimeout(()=>{
        button.value="send message"
        form.reset();
      },1000)
    });
   
});
