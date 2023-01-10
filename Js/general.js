const $ = document

// User Form login
let overlayContainer = $.querySelector("#overlay");
let userLoginForm = $.querySelector('.user-account');
let userLoginBtn = $.querySelector('.header-users__account');
let userLoginBtnClose = $.querySelector('.user-account__close');
// Shopping Cart ( User Basket)
let shoppingCartContainer = $.querySelector('.shopping-cart');
let shoppingCartBtn = $.querySelector('#user-basket');
let shoppingCartCloseBtn = $.querySelector('.shopping-cart__close');
// set Dark Mode 
let bodyContainer = document.body
let switchDarkMode = $.querySelector('.switch');
// select Element Menu 
let menuContainer = $.querySelector('.menu');
let headerIconBtn = $.querySelector('.header__icon') ;
let iconMenuBtn = $.querySelector('.fa-bars')


// show login form
function userLoginFormShow () {
    userLoginForm.classList.add('active-user')
    overlayContainer.classList.add('overlay')
};

// close login form
function userLoginFormClose () {
    userLoginForm.classList.remove('active-user')
    overlayContainer.classList.remove('overlay')

};

// close all Form 
function overlayContainerControl () {
    userLoginForm.classList.remove('active-user')
    shoppingCartContainer.classList.remove('active-basket')
    menuContainer.classList.remove('menu-active')
    iconMenuBtn.classList = 'fa fa-bars'
    overlayContainer.classList.remove('overlay')
}

// show Shopping Cart 
function shoppingCartShow (){
    shoppingCartContainer.classList.add('active-basket')
    overlayContainer.classList.add('overlay')
}

// close Shopping Cart 
function shoppingCartClose () {
    shoppingCartContainer.classList.remove('active-basket')
    overlayContainer.classList.remove('overlay')
}

// set Dark Mode 
function setDarkMode () {
    bodyContainer.classList.toggle('dark')

    if(bodyContainer.className.includes('dark')){
        localStorage.setItem('Theme' , 'dark')
    }else{
        localStorage.setItem('Theme' , 'light')
    }
    
}
// set dark mode history
window.onload = function (){
   let getThemeLocal = localStorage.getItem('Theme')

   if(getThemeLocal === "dark"){
    bodyContainer.classList.add('dark')
   }
}

// set Menu Toggle Right
function menuToggle (){
    if(iconMenuBtn.classList.contains('fa-bars')){
        menuContainer.classList.add('menu-active')
        iconMenuBtn.classList = 'fa fa-times'
        overlayContainer.classList.add('overlay')
    }else{
        menuContainer.classList.remove('menu-active')
        iconMenuBtn.classList = 'fa fa-bars'
        overlayContainer.classList.remove('overlay')
    }
}
userLoginBtn.addEventListener('click', userLoginFormShow);
userLoginBtnClose.addEventListener('click' , userLoginFormClose);
overlayContainer.addEventListener('click' , overlayContainerControl);
shoppingCartBtn.addEventListener('click' , shoppingCartShow);
shoppingCartCloseBtn.addEventListener('click' , shoppingCartClose);
switchDarkMode.addEventListener('click', setDarkMode);
headerIconBtn.addEventListener('click' , menuToggle);
