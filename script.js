// when page is loaded the navbar is hidden so it´s not toggled
var ifToggled = 'no'; 
// shows or hides the navigation on mobile devices
const showMobileMenu = function(){
  
  let hamburger = document.getElementsByClassName('hamburgerContent')[0];
  let mobileNavbar = document.getElementsByClassName('navbarMobileBox')[0];
  let toggle = window.document.getElementsByClassName('hamburgerMenu')[0];
  // toggles the navbar on if it´s not already toggled on
  if (ifToggled === 'no') {
    toggle.classList.toggle("change");
    document.getElementsByClassName('hamburgerContent')[0].style.height = '100vh';
    document.getElementsByClassName('bar1')[0].style.background = 'white';
    document.getElementsByClassName('bar3')[0].style.background = 'white';
    
    for (var i = 0; i < document.getElementsByClassName('menuitem').length; i++) {
      document.getElementsByClassName('menuitem')[i].style.opacity = '1';
    }
    
    mobileNavbar.style.background = 'rgba(0, 0, 0, 0.8)';
    window.document.body.style.overflow = 'hidden';
    // to keep
    ifToggled = 'yes';
  }
  // toggles the navbar off if it´s toggled on
  else if (ifToggled === 'yes') {
    ifToggled = 'no';
    toggle.classList.toggle("change");
    document.getElementsByClassName('hamburgerContent')[0].style.height = '0';
    document.getElementsByClassName('bar1')[0].style.background = 'black';
    document.getElementsByClassName('bar3')[0].style.background = 'black';
    
    for (var i = 0; i < document.getElementsByClassName('menuitem').length; i++) {
      document.getElementsByClassName('menuitem')[i].style.opacity = '0';
    }
    
    mobileNavbar.style.background = 'none';
    window.document.body.style.overflow = 'scroll';
    
    if (scrollY > 100) {
      window.document.getElementsByClassName('navbarMobileBox')[0].style.background = 'white'
    }
    
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