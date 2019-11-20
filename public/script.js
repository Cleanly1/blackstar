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



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
// console.log(window.document.body.querySelector('.arrow'))

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


window.document.querySelector('.mailInput').addEventListener('keydown', function(event){
  if (event.code === "Enter") {
    window.document.querySelector('.mailButton').classList.toggle("mailButtonChange");
    window.document.querySelector('.mailInput').classList.toggle("mailButtonDisplay");
    window.document.querySelector('.completedMailSignup').classList.toggle("displayConfirmation");
    setTimeout(function(){
      window.document.querySelector('.backgroundGrey').classList.toggle("heroShowOverlay");
    }, 3000)
  }
})

window.document.querySelector('.mailButton').addEventListener('click', function(){
  window.document.querySelector('.mailButton').classList.toggle("mailButtonChange");
  window.document.querySelector('.mailInput').classList.toggle("mailButtonDisplay");
  window.document.querySelector('.completedMailSignup').classList.toggle("displayConfirmation");
  setTimeout(function(){
    window.document.querySelector('.completedMailSignup').classList.toggle("displayConfirmationTransition");
  }, 100)
  setTimeout(function(){
    window.document.querySelector('.backgroundGrey').classList.toggle("heroShowOverlay");
  }, 3000)
})
// setInterval(function(){ window.document.getElementsByClassName('hero')[0].classList.toggle("heroBG2"); }, 4000);


window.onscroll = displayScroll;
window.document.getElementsByClassName('hamburgerMenu')[0].addEventListener('click', showMobileMenu); 

