const cross = document.querySelector('.toggle');
const navList = document.querySelector('.nav-bar');

cross.addEventListener('click', () => {
  navList.classList.toggle('nav-bar-show');
});
