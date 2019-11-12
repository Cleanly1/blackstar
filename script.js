// when page is loaded the navbar is hidden so it´s not toggled
var ifToggled = 'no'; 
// shows or hides the navigation on mobile devices
const showMobileMenu = function(){
  
  let hamburger = document.getElementsByClassName('hamburgerContent')[0];
  let mobileNavbar = document.getElementsByClassName('navbarMobileBox')[0];
  let toggle = window.document.getElementsByClassName('hamburgerMenu')[0];
  
  toggle.classList.toggle("change");
  hamburger.classlist.toggle("");
  
  // toggles the navbar on if it´s not already toggled on
  if (ifToggled === 'no') { 
    hamburger.style.height = '100vh';

    for (var i = 0; i < document.getElementsByClassName('menuitem').length; i++) {
      document.getElementsByClassName('menuitem')[i].style.opacity = '1';
    }
    
    mobileNavbar.style.background = 'rgba(0, 0, 0, 0.8)';
    window.document.body.style.overflow = 'hidden';
    // to keep track if the navbar is toggled or not
    ifToggled = 'yes';
  }
  // toggles the navbar off if it´s toggled on
  else if (ifToggled === 'yes') {
    ifToggled = 'no'; 
    hamburger.style.height = '0'; 
    
    for (var i = 0; i < document.getElementsByClassName('menuitem').length; i++) {
      document.getElementsByClassName('menuitem')[i].style.opacity = '0';
    }
    
    
    window.document.body.style.overflow = 'scroll';
    
    if (scrollY > 100) {
      document.querySelector('.navbarMobileBox').style.background = 'white'
    }else {
      document.querySelector('.navbarMobileBox').style.background = 'none'
    }
    
  }
  
}

const displayScroll = function() {
  if (scrollY > 100) {
    document.querySelector('.navbarMobileBox').style.background = 'white'
  }else {
    document.querySelector('.navbarMobileBox').style.background = 'none'
  }
}


window.onscroll = displayScroll;
window.document.getElementsByClassName('hamburgerMenu')[0].addEventListener('click', showMobileMenu); 