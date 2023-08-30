var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img')

/* MENU */

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'IMG/menu-outline.png'){
        iconMenu.setAttribute("src","IMG/close-outline.png");
    }else{
        TransitionEvent
        iconMenu.setAttribute("src","IMG/menu-outline.png");
    }

   menu.classList.toggle('active');
});
