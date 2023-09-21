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


let emailInput  = document.getElementById('email')
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput,emailLabel)

emailInput.addEventListener('change', (event)=>{
    let value = event.target.value;

    if(value.includes('@') && value.includes('.com')){
        estilizarInputCorreto(emailInput,emailHelper);
        inputsCorretos.email = true
    } else{
        emailHelper.innerText = "Você precisa inserir um email válido"
        estilizarInputIncorreto(emailInput,emailHelper);
        inputsCorretos.email = false
    }
})    