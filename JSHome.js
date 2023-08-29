var radio = document.querySelector('.manual-btn')
var cont = 1
var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img')

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 3000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true

}



menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'IMG/menu-outline.png'){
        iconMenu.setAttribute("src","IMG/close-outline.png");
    }else{
        TransitionEvent
        iconMenu.setAttribute("src","IMG/menu-outline.png");
    }

   menu.classList.toggle('active');
});
