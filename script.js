// shows or hides the navigation on mobile devices 
const showMobileMenu = function(){
  
  let hamburger = document.getElementsByClassName('hamburgerContent')[0];
  let mobileNavbar = document.getElementsByClassName('navbarMobileBox')[0];
  let toggle = window.document.getElementsByClassName('hamburgerMenu')[0];
  let menuItem = document.getElementsByClassName('menuItem');
  
  
  let isToggled = toggle.classList.toggle("change")
  document.body.classList.toggle("scrollHidden")
  
  hamburger.classList.toggle("hamburgerContentShow"); 
   
  for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].classList.toggle("menuItemShow");
  } 
  
  
  // changes color of navbarMobileBox
  if (isToggled === true) { 
    
    
    mobileNavbar.style.background = 'rgba(0, 0, 0, 0.8)';
    
  }
  // changes color of navbarMobileBox
  else if (isToggled === false) {
    
    if (scrollY > 100) {
      document.querySelector('.navbarMobileBox').style.background = 'white';
    }else {
      document.querySelector('.navbarMobileBox').style.background = 'none';
    }
    
  }
  
}

const displayScroll = function() {
  if (scrollY > 100) {
    document.querySelector('.navbarMobileBox').style.background = 'white';
  }else {
    document.querySelector('.navbarMobileBox').style.background = 'none';
  }
}



setInterval(function(){ window.document.getElementsByClassName('hero')[0].classList.toggle("heroBG2"); }, 6000);


window.onscroll = displayScroll;
window.document.getElementsByClassName('hamburgerMenu')[0].addEventListener('click', showMobileMenu); 