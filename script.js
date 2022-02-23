/**
 * Menu mobile
 * button burger for mobile and tablet
 */
const burger = document.querySelector(".burger");
const navMobil = document.querySelector(".nav--mobil");
const body = document.querySelector(".body");
const lis = document.querySelectorAll(".navbar li");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMobil.classList.toggle("nav--open");
  body.classList.toggle("overflow");
});

lis.forEach(li => {
  li.addEventListener("click" , () => {
    navMobil.classList.toggle("nav--open");
    burger.classList.toggle("active");
    body.classList.toggle("overflow");
  });
});
/**
 * Animations 
 */
const h1 = document.querySelector(".text--h1");

new Typewriter(h1, {
  loop: true,
})
  .changeDelay(110)
  // // .typeString("Besoin d'un site ")
  .typeString("Je suis développeur web")
  .pauseFor(500)
  .deleteChars(23)
  .typeString("Je travaille avec javascript")
  .pauseFor(400)
  .deleteChars(10)
  .typeString("VueJs et NodeJs")
  .pauseFor(400)
  .deleteChars(33)
  .start();

/**
 * button up
 */
const btn = document.querySelector("#up");

window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
  if (window.pageYOffset > 600){
    btn.style.right = -1.5 + "rem";
  }else{
    btn.style.right = -6.5 + "rem";
  }
}
btn.addEventListener("click", () => {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
});

/**
 * Show Year of copyright
 */
const footerCopyright = document.querySelector('.footer__content--p a');
const currentYear = new Date().getFullYear();

function copyright () {
  footerCopyright.textContent = `© ${ currentYear } - Tout droits réservés: Damien Carré`;
}
copyright();

// Disable
function disableselect(e){ 
return false; 
} 

function reEnable(){ 
return true; 
} 

//if IE4+ 
document.onselectstart = new Function ("return false"); 
document.oncontextmenu = new Function ("return false"); 
//if NS6 
if (window.sidebar){ 
document.onmousedown=disableselect;
document.onclick=reEnable ;
} 
