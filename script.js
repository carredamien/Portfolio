const btn = document.querySelector('.fa-chevron-up');

btn.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })
});