const preload = document.querySelector('.preload')

window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.querySelector(".preload")
    preloader.classList.add('finish')
  }, 1000);

});