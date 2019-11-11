



var ifToggled = 'no';

const showMobileMenu = function(x){
  let hamburger = document.getElementsByClassName('hamburgerContent')[0];
  let mobileNavbar = document.getElementsByClassName('navbarMobileBox')[0];
  console.log(ifToggled)
  if (ifToggled === 'no') {
    x.classList.toggle("change");
    document.getElementsByClassName('hamburgerContent')[0].style.display = 'block';
    document.getElementsByClassName('bar1')[0].style.background = 'white';
    document.getElementsByClassName('bar3')[0].style.background = 'white';
    mobileNavbar.style.background = 'rgba(0, 0, 0, 0.9)';
    window.document.body.style.overflow = 'hidden';
    ifToggled = 'yes';
  }
  else if (ifToggled === 'yes') {
    ifToggled = 'no';
    x.classList.toggle("change");
    document.getElementsByClassName('hamburgerContent')[0].style.display = 'none';
    document.getElementsByClassName('bar1')[0].style.background = 'black';
    document.getElementsByClassName('bar3')[0].style.background = 'black';
    mobileNavbar.style.background = 'none';
    window.document.body.style.overflow = 'scroll';
    
  }
  
}






 
// window.document.getElementsByClassName('hamburgerMenu')[0].addEventListener("click", showMobileMenu);
// window.document.getElementsByClassName('backButton')[0].addEventListener("click", hideMobileMenu);