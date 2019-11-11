



var ifToggled = 'no';

const showMobileMenu = function(){
  let hamburger = document.getElementsByClassName('hamburgerContent')[0];
  let mobileNavbar = document.getElementsByClassName('navbarMobileBox')[0];
  let toggle = window.document.getElementsByClassName('hamburgerMenu')[0];
  
  if (ifToggled === 'no') {
    toggle.classList.toggle("change");
    document.getElementsByClassName('hamburgerContent')[0].style.height = '100vh';
    document.getElementsByClassName('bar1')[0].style.background = 'white';
    document.getElementsByClassName('bar3')[0].style.background = 'white';
    mobileNavbar.style.background = 'rgba(0, 0, 0, 0.8)';
    window.document.body.style.overflow = 'hidden';
    ifToggled = 'yes';
  }
  else if (ifToggled === 'yes') {
    ifToggled = 'no';
    toggle.classList.toggle("change");
    document.getElementsByClassName('hamburgerContent')[0].style.height = '0';
    document.getElementsByClassName('bar1')[0].style.background = 'black';
    document.getElementsByClassName('bar3')[0].style.background = 'black';
    mobileNavbar.style.background = 'none';
    window.document.body.style.overflow = 'scroll';
    
  }
  
}

const displayScroll = function() {
  if (scrollY > 100) {
    window.document.getElementsByClassName('navbarMobileBox')[0].style.background = 'white'
  }else {
    window.document.getElementsByClassName('navbarMobileBox')[0].style.background = 'none'
  }
}


window.onscroll = displayScroll;
window.document.getElementsByClassName('hamburgerMenu')[0].addEventListener('click', showMobileMenu);





 
// window.document.getElementsByClassName('hamburgerMenu')[0].addEventListener("click", showMobileMenu);
// window.document.getElementsByClassName('backButton')[0].addEventListener("click", hideMobileMenu);