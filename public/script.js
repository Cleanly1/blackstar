// shows or hides the navigation on mobile devices 
const showMobileMenu = function(){
  
  let hamburger = document.getElementsByClassName('hamburgerContent')[0];
  let mobileNavbar = document.getElementsByClassName('navbarMobileBox')[0];
  let toggle = window.document.getElementsByClassName('hamburgerMenu')[0];
  let menuItem = document.getElementsByClassName('menuItem');
  
  
  let isToggled = toggle.classList.toggle("change")
  document.body.classList.toggle("scrollHidden")
  
  hamburger.classList.toggle("hamburgerContentShow"); 
  
  mobileNavbar.querySelector('.logo').classList.toggle("logoWhite")  
  // changes color of navbarMobileBox
  if (isToggled === true) { 
    
    mobileNavbar.style.background = 'rgba(0, 0, 0, 0.9)';
    
  }
  // changes color of navbarMobileBox
  else if (isToggled === false) {
  
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
  if (window.innerWidth >= 768) {
    return (
        rect.top < (window.innerHeight-300 || document.documentElement.clientHeight-300) &&
        rect.left >= 0 &&
        rect.bottom >= window.innerHeight-300 && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
  }
  if (window.innerWidth < 768) {
    return (
        rect.top < (window.innerHeight-400 || document.documentElement.clientHeight-400) &&
        rect.bottom >= 0+200 
    );
  }
}
 
window.document.addEventListener('scroll', function(){
  const overlay2d = window.document.querySelector('.overlay2d')
  const elementVisible = isElementInView(overlay2d);

  if (window.innerWidth > 1024 && elementVisible) {
    overlay2d.classList.add('show2dOverlayDesktop');
  }
  if (window.innerWidth > 1024 && elementVisible === false) {
    overlay2d.classList.remove('show2dOverlayDesktop');
  }
  if (window.innerWidth <= 1024 && window.innerWidth >= 768 && elementVisible) {
    window.document.querySelector('.fullTechOverlayImage').classList.add('fullTechOverlayImageShow');
  } 
  if (window.innerWidth <= 1024 && window.innerWidth >= 768 && elementVisible === false) {
    window.document.querySelector('.fullTechOverlayImage').classList.remove('fullTechOverlayImageShow');
  } 
  if (window.innerWidth < 768 && elementVisible === true) {
    setTimeout(function(){
      window.document.querySelector('.fullTechOverlayImage').classList.add('fullTechOverlayImageShow');
    }, 500)
  } 
  if (window.innerWidth < 768 && elementVisible === false) {
    window.document.querySelector('.fullTechOverlayImage').classList.remove('fullTechOverlayImageShow');

  } 
}) 


setTimeout(function(){
  let imageWidth = window.document.querySelector('.techOverlayImage').getBoundingClientRect().width;
  window.document.getElementsByClassName('fullTechOverlayImage')[0].style.right = imageWidth+'px';
},100)

window.addEventListener('resize', function(){
  
  setTimeout(function(){
    let imageWidth = window.document.querySelector('.techOverlayImage').getBoundingClientRect().width;
    window.document.getElementsByClassName('fullTechOverlayImage')[0].style.right = imageWidth+'px';
  },500)
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
  window.document.querySelector('.mailInput').setAttribute('placeholder', 'BLACKSTAR EXCLUSIVE')
})
 
window.document.getElementsByClassName('hamburgerMenu')[0].addEventListener('click', function(){
  showMobileMenu();
}); 

