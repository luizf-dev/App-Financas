//EXIBE MENU PARA DISPOSITIVOS MÓVEIS AO CLICK DO MOUSE
function showMenu(){
    let menuMobile = document.querySelector('.mobile-menu');
    let bgMenu = document.querySelector('.header');

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        bgMenu.classList.remove('open');
        //document.querySelector('.icon').src = "assets/img/bars-solid.svg";
    }else{
        menuMobile.classList.add('open');
        bgMenu.classList.add('open');
        //document.querySelector('.icon').src = 'assets/img/bars-solid.svg';
    }
}

//ALTERA BACKGROUND DO MENU AO SCROLL DA PAGINA
$(function(){   
    var nav = $('#header');   
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 1) { 
            nav.addClass("menu-fixo");            
        } else { 
            nav.removeClass("menu-fixo");             
        } 
    });  
});
