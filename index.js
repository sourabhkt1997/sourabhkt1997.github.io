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
// let project=document.getElementById('projects')

// const buttonRight = document.getElementById('next-right');
// const buttonLeft = document.getElementById('next-left');

// buttonRight.addEventListener("click",()=>{
    
//     document.getElementById('projects').scrollLeft+=400
// })

// buttonLeft.addEventListener("click",()=>{
    
//     document.getElementById('projects').scrollLeft-=400
// })
 
// buttonLeft.onclick = function () {
//   document.getElementById('container').scrollLeft -= 20;
// project.addEventListener('scroll', () => console.log(scrollY))

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

// let wrap=document.getElementById("projects")
// let fps = new FullPageScroll(wrap);
// fps.slides.forEach(function(slide, index){
//   console.log(index)
//   if (index === fps.currentSlide) {
//     slideIndicator.className = "active";
//   } else {
//     slideIndicator.className = "";
//   }

// })

const horizontalScrollView = document.getElementById('projects');



horizontalScrollView.addEventListener('scroll', function() {
  const scrollX = horizontalScrollView.scrollLeft;
  const childWidth = horizontalScrollView.clientWidth/4;
  const childIndex = (scrollX /childWidth);
  // console.log(childIndex)
    if(childIndex<=1){
    document.getElementById("1").classList.add("active")
  }
  else{
    document.getElementById("1").classList.remove("active")
  }
  if(childIndex>1&&childIndex<=2){
    document.getElementById("2").classList.add("active")
  }
  else{
    document.getElementById("2").classList.remove("active")
  }
  if(childIndex>2&&childIndex<=3){
    document.getElementById("3").classList.add("active")
  }
  else{
    document.getElementById("3").classList.remove("active")
  }
  if(childIndex>3&&childIndex<=4){
    document.getElementById("4").classList.add("active")
  }
  else{
    document.getElementById("4").classList.remove("active")
  }
  if(childIndex>=4){
    document.getElementById("4").classList.add("active")
  }
  else{
    document.getElementById("4").classList.remove("active")
  }

});

let options=document.getElementById("options")
let mobilechild=document.getElementById("mobilechild")
let count=0
options.addEventListener("click",()=>{
  count++
  console.log(count)
  if(count%2==0){
    mobilechild.classList.remove("onclick-mobilechild")
  }
  else{
    mobilechild.classList.add("onclick-mobilechild")
  }
  
})
let navbar=document.getElementById("mobile-nav")
document.addEventListener("click",(event)=>{

  if (!navbar.contains(event.target) && !mobilechild.contains(event.target)) {
    count--
  mobilechild.classList.remove("onclick-mobilechild")
  }
})
let ele=document.querySelectorAll(".ContributionCalendar-day")
ele.forEach(function(element) {
  element.classList.add("gitttd")
  element.innerHTML=null
  let dataLevel = element.getAttribute("data-level");
  if(dataLevel=="1"){
    element.classList.add("zerogreen")
    // element.innerHTML=null
}

  if(dataLevel=="0"){
      element.classList.add("firstgreen")
      // element.innerHTML=null
  }
  if(dataLevel=="2"){
    element.classList.add("secondgreen")
    // element.innerHTML=null
  }
  if(dataLevel=="3"){
    element.classList.add("thirdgreen")
    // element.innerHTML=null
  }
  if(dataLevel=="4"){
    element.classList.add("forthgreen")
    // element.innerHTML=null
  }
   
});




