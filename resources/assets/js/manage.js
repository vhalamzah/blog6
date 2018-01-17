const accordions = document.getElementsByClassName('has-submenu')
 const adminSlideButton = document.getElementById('admin-slideout-button')

/***
function setSubmenuStyles (submenu, maxHeight, margins) {
  submenu.style.maxHeight = maxHeight
  submenu.style.marginTop = margins
  submenu.style.marginBottom = margins
}
*/ 

adminSlideButton.onclick = function () {
  this.classList.toggle('is-active');
  document.getElementById('admin-side-menu').classList.toggle('is-active');
}

for (var i = 0; i < accordions.length; i++) {
  
  if (accordions[i].classList.contains('is-active')) {
    const submenu = accordions[i].nextElementSibling;
    submenu.style.maxHeight =submenu.scrollHeight + "px"
      submenu.style.marginTop = "0.075em"
      submenu.style.marginBottom ="0.075em" 
    //setSubmenuStyles(submenu, submenu.scrollHeight + "px", "0.75em")
  }
  
    accordions[i].onclick = function () {
    this.classList.toggle('is-active')

    const submenu = this.nextElementSibling
    if (submenu.style.maxHeight) {
      // menu is open, we need to close it now
      submenu.style.maxHeight= null
      submenu.style.marginTop=null
      submenu.style.marginBottom=null
      //setSubmenuStyles(submenu, null, null)
    } else {
      // meny is close, so we need to open it
      submenu.style.maxHeight =submenu.scrollHeight + "px"
      submenu.style.marginTop = "0.075em"
      submenu.style.marginBottom ="0.075em"


     // setSubmenuStyles(submenu, submenu.scrollHeight + "px", "0.75em")
    }
  }
}
