/* Elements */
const menu = document.querySelector('.hamburger');
const transition = document.querySelector('.transition');
const navbar = document.querySelector('#navbar-2');
const exitIcon = document.querySelector('.fa-times');
const doc = document.querySelector('body');
const hero = document.querySelector('.hero');
const logo = document.querySelector('.logo');
/* Event Listeners */
menu.addEventListener('click', DisplayMenu);
exitIcon.addEventListener('click', ExitMenu);

/* Functions */
function DisplayMenu(event){
    ShowHamburgerMenu();
    document.documentElement.scrollTop = 0;     // In case someone clicks on the menu, it goes to the top.
    transition.style.width = '100%';
    navbar.style.zIndex = 3;
    doc.style.overflowY = 'hidden';
    exitIcon.style.zIndex = 3;
    exitIcon.style.opacity = 1;
    setBlur();
    event.preventDefault();
}

function ExitMenu(event){
   doc.style.overflowY = 'scroll';
   transition.style.width = '0%';
   exitIcon.style.zIndex = -1;
   exitIcon.style.opacity = 0;
   ExitHamburgerMenu();
   removeBlur();
}

/*
    The reason I've use these function is because if you set the navbar's display property
    to zero, it won't display the opacity's effect when it is set to zero. I had to be a little creative...
*/

function ExitHamburgerMenu(){
    // Set the Hamburger Navigation bar's opacity to 0;
    navbar.style.opacity = 0;
    // Wait for a second then hide it.
    setTimeout(function (){
        navbar.style.display = 'none';
    }, 500)
}

function ShowHamburgerMenu(){
    // When you click again on the menu, it'll make sure that the navbar is not displayed.
    navbar.style.opacity = 0;
    // Display the navigation bar.
    navbar.style.display = 'flex';
    // After it is displayed, wait for a second and then set the opacity to one.
    setTimeout(function (){
        navbar.style.opacity = 1;
    }, 500)   
}

/* Set the blur when the Hamburger menu is clicked.*/

function setBlur(){
    hero.style.filter = 'blur(10px)';
    menu.style.filter = 'blur(10px)';
    logo.style.filter = 'blur(10px)';
}

/* Remove the blur when quits */
function removeBlur(){
    hero.style.filter = 'blur(0px)';
    menu.style.filter = 'blur(0px)';
    logo.style.filter = 'blur(0px)';    
}