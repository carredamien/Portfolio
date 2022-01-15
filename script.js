const btn = document.querySelector('.fa-chevron-up');

btn.addEventListener('click', () => {
  window.scrollTo({
    top:100,
    left:0,
    behavior:"smooth"
  })
});