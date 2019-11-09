




const showMobileMenu = function(){
  window.document.getElementsByClassName('hamburgerContent')[0].style.display = 'block';
  window.document.body.style.overflow = 'hidden';
}
const hideMobileMenu = function(){
  window.document.getElementsByClassName('hamburgerContent')[0].style.display = 'none';
  window.document.body.style.overflow = 'scroll';
}









window.document.getElementsByClassName('hamburgerMenu')[0].addEventListener("click", showMobileMenu);
window.document.getElementsByClassName('backButton')[0].addEventListener("click", hideMobileMenu);