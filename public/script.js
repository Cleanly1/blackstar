// shows or hides the navigation on mobile devices 
const showMobileMenu = function(){
  
  let hamburger = document.getElementsByClassName('hamburgerContent')[0];
  let mobileNavbar = document.getElementsByClassName('navbarMobileBox')[0];
  let toggle = window.document.getElementsByClassName('hamburgerMenu')[0];
  let menuItem = document.getElementsByClassName('menuItem');
  
  
  let isToggled = toggle.classList.toggle("change")
  document.body.classList.toggle("scrollHidden")
  
  hamburger.classList.toggle("hamburgerContentShow"); 
  
  
  // changes color of navbarMobileBox
  if (isToggled === true) { 
    
    mobileNavbar.style.background = 'rgba(0, 0, 0, 0.9)';
    
  }
  // changes color of navbarMobileBox
  else if (isToggled === false) {
    
    if (window.pageYOffset > 100) {
      document.querySelector('.navbarMobileBox').style.background = 'white';
    }else {
      document.querySelector('.navbarMobileBox').style.background = 'none';
    }
    
  }
  
  
}

const displayScroll = function() {
  if (window.pageYOffset > 100 && window.innerWidth < 1024) {
    document.querySelector('.navbarMobileBox').style.background = 'white';
  }else {
    document.querySelector('.navbarMobileBox').style.background = 'none';
  }
}
 
const allDropDowns = document.body.querySelectorAll(".dropbtn");
const arrows = document.body.querySelectorAll('.arrow');

allDropDowns.forEach(function(dropDown){
  
  dropDown.addEventListener('click', function(event){
    
    if (event.target === allDropDowns[0] || event.target === arrows[0]) {
      document.body.querySelector(".blackDrop").classList.toggle("show");
      arrows[0].classList.toggle('arrowActive');
    }
    
    if (event.target === allDropDowns[1] || event.target === arrows[1]) {
      document.body.querySelector(".expDrop").classList.toggle("show");
      arrows[1].classList.toggle('arrowActive');
    }
    
    if (event.target === allDropDowns[2] || event.target === arrows[2]) {
      document.body.querySelector(".startDrop").classList.toggle("show");
      arrows[2].classList.toggle('arrowActive');
    }
  })
    
  
})


setTimeout(function(){
  window.document.querySelector('.backgroundGrey').classList.toggle("heroShowOverlay");
}, 1000)

const mailConfirm = function(){
  window.document.querySelector('.mailButton').classList.toggle("mailButtonChange");
  window.document.querySelector('.mailInput').classList.toggle("mailButtonDisplay");
  window.document.querySelector('.completedMailSignup').classList.toggle("displayConfirmation");
  setTimeout(function(){
    window.document.querySelector('.completedMailSignup').classList.toggle("displayConfirmationTransition");
  }, 100)
  setTimeout(function(){
    window.document.querySelector('.backgroundGrey').classList.toggle("heroShowOverlay");
    setTimeout(function(){
      window.document.querySelector('.mailButton').style.display = 'none'
    }, 2000)
  }, 1000)
}

function isElementInView (el) {

    var rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight-300 || document.documentElement.clientHeight-300) &&
        rect.left >= 0 &&
        rect.bottom >= window.innerHeight-300 && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}

function isElementInViewMobile (el) {

    var rect = el.getBoundingClientRect(); 
    return (
        rect.top < (window.innerHeight-400 || document.documentElement.clientHeight-400) &&
        rect.bottom >= 0+200 
    );
}
 
window.document.addEventListener('scroll', function(){
  const overlay2d = window.document.querySelector('.overlay2d')
  const elementVisible = isElementInView(overlay2d); 
  const elementVisibleMobile = isElementInViewMobile(overlay2d);

  if (window.innerWidth > 1024 && elementVisible) {
    overlay2d.classList.add('show2dOverlayDesktop');
  }
  if (window.innerWidth > 1024 && elementVisible === false) {
    overlay2d.classList.remove('show2dOverlayDesktop');
  }
  if (window.innerWidth <= 1024 && window.innerWidth >= 768 && elementVisible) {
    overlay2d.classList.add('show2dOverlayTablet');
  }
  if (window.innerWidth <= 1024 && window.innerWidth >= 768 && elementVisible === false) {
      overlay2d.classList.remove('show2dOverlayTablet');
  }
  if (window.innerWidth < 768 && elementVisibleMobile === true) {
    console.log(window.document.querySelector('.hej'))
      window.document.querySelector('.hej').classList.add('hej2')
  }
  if (window.innerWidth < 768 && elementVisibleMobile === false) {
    window.document.querySelector('.hej').classList.remove('hej2')
    // overlay2d.classList.remove('show2dOverlay');
  }
}) 

window.document.querySelector('.mailInput').addEventListener('keydown', function(event){
  if (event.code === "Enter") {
    mailConfirm();
  }
})

window.document.querySelector('.mailButton').addEventListener('click', function(){
  mailConfirm();
})

window.document.querySelector('.mailInput').addEventListener('focus', function(){
  window.document.querySelector('.mailInput').setAttribute('placeholder', 'example@example.se')
})

window.document.querySelector('.mailInput').addEventListener('focusout', function(){
  window.document.querySelector('.mailInput').setAttribute('placeholder', 'BlackStar Exclusive')
})
// setInterval(function(){ window.document.getElementsByClassName('hero')[0].classList.toggle("heroBG2"); }, 4000);


window.onscroll = displayScroll;
window.document.getElementsByClassName('hamburgerMenu')[0].addEventListener('click', function(){
  showMobileMenu();
}); 

