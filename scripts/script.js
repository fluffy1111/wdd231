document.getElementById("lastModified").innerHTML = document.lastModified;

const navButton = document.querySelector('#nav-button');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
});