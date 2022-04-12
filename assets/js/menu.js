function showMenu(){
    let menuMobile = document.querySelector('.mobile-menu');
    let bgMenu = document.querySelector('.header');

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        bgMenu.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/bars-solid.svg";
    }else{
        menuMobile.classList.add('open');
        bgMenu.classList.add('open');
        document.querySelector('.icon').src = "assets/img/window-close-solid.svg";
    }
}
