"use strict"
// Start App Js :) Mohammad Zeynali 

// User Form login
let overlayContainer = document.querySelector("#overlay");
let userLoginForm = document.querySelector('.user-account');
let userLoginBtn = document.querySelector('.header-users__account');
let userLoginBtnClose = document.querySelector('.user-account__close');
// Shopping Cart ( User Basket)
let shoppingCartContainer = document.querySelector('.shopping-cart');
let shoppingCartBtn = document.querySelector('#user-basket');
let shoppingCartCloseBtn = document.querySelector('.shopping-cart__close');
// set Dark Mode 
let bodyContainer = document.body
let switchDarkMode = document.querySelector('.switch');

// style Brands
let companiesContainer = document.querySelectorAll(".companies__image");
// select Element Product-items
let ProductItemContainer = document.querySelector("#Products-items");
// select Element Menu 
let menuContainer = document.querySelector('.menu');
let headerIconBtn = document.querySelector('.header__icon') ;
let iconMenuBtn = document.querySelector('.fa-bars')
// select Element Weblog
let weblogContainer = document.querySelector('.Weblog-items')



// Save all information Product
let allProductCartArray = [
{id: 1 , title:'پیراهن جین اسپرت'  , description:'لورم ایپسوم نمونه متن آزمایشی می باشد که در صنعت طراحی مورد استفاده قرار می گیرد ' , image:'images/product/product-1.png' , price:499000 },
{id: 2 , title:'شلوار راحتی '  , description:'لورم ایپسوم نمونه متن آزمایشی می باشد که در صنعت طراحی مورد استفاده قرار می گیرد ' , image:'images/product/product-2.png' , price:249000 },
{id: 3 , title:'شلوار کتان'  , description:'لورم ایپسوم نمونه متن آزمایشی می باشد که در صنعت طراحی مورد استفاده قرار می گیرد ' , image:'images/product/product-3.png' , price:395000 },
{id: 4 , title:'پیراهن مجلسی'  , description:'لورم ایپسوم نمونه متن آزمایشی می باشد که در صنعت طراحی مورد استفاده قرار می گیرد ' , image:'images/product/product-4.png' , price:239000 },
{id: 5 , title:'شلوار لی'  , description:'لورم ایپسوم نمونه متن آزمایشی می باشد که در صنعت طراحی مورد استفاده قرار می گیرد ' , image:'images/product/product-5.png' , price:375000 },
{id: 6 , title:'تی شرت'  , description:'لورم ایپسوم نمونه متن آزمایشی می باشد که در صنعت طراحی مورد استفاده قرار می گیرد ' , image:'images/product/product-6.png' , price:225000 },
{id: 7 , title:'بلوز کتان'  , description:'لورم ایپسوم نمونه متن آزمایشی می باشد که در صنعت طراحی مورد استفاده قرار می گیرد ' , image:'images/product/product-7.png' , price:200000 },
{id: 8 , title:'بلوز نخی'  , description:'لورم ایپسوم نمونه متن آزمایشی می باشد که در صنعت طراحی مورد استفاده قرار می گیرد ' , image:'images/product/product-8.png' , price:499000 },
{id: 9 , title:'کت شلوار زنانه'  , description:'لورم ایپسوم نمونه متن آزمایشی می باشد که در صنعت طراحی مورد استفاده قرار می گیرد ' , image:'images/product/product-9.png' , price:500000 },
{id: 10 , title:'ساعت کلاسیک مردانه'  , description:'لورم ایپسوم نمونه متن آزمایشی می باشد که در صنعت طراحی مورد استفاده قرار می گیرد ' , image:'images/product/product-10.png' , price:350000 },
{id: 11 , title:'ساعت کلاسیک مردانه'  , description:'لورم ایپسوم نمونه متن آزمایشی می باشد که در صنعت طراحی مورد استفاده قرار می گیرد ' , image:'images/product/product-11.png' , price:499000 },
{id: 12 , title:'کتونی ورزشی دخترانه '  , description:'لورم ایپسوم نمونه متن آزمایشی می باشد که در صنعت طراحی مورد استفاده قرار می گیرد ' , image:'images/product/product-12.png' , price:239000 },
{id: 13 , title:' کتونی راحتی'  , description:'لورم ایپسوم نمونه متن آزمایشی می باشد که در صنعت طراحی مورد استفاده قرار می گیرد ' , image:'images/product/product-13.png' , price:159000 },
{id: 14 , title:' کتونی راحتی'  , description:'لورم ایپسوم نمونه متن آزمایشی می باشد که در صنعت طراحی مورد استفاده قرار می گیرد ' , image:'images/product/product-14.png' , price:169000 },
{id: 15 , title:' کتونی ورزشی پسرانه'  , description:'لورم ایپسوم نمونه متن آزمایشی می باشد که در صنعت طراحی مورد استفاده قرار می گیرد ' , image:'images/product/product-15.png' , price:175000 },
];


// save all Weblog information 

let allWeblogArray = [
    {id: 1 , image:'images/weblog/blog1.png' , title : 'پیراهن جین ' , date: '17 آبان 1401 '},
    {id: 2 , image:'images/weblog/blog2.png' , title : ' برند تجاری مد ' , date: '13 مهر 1401 '},
    {id: 3 , image:'images/weblog/blog3.png' , title : ' محصولات جدید این فصل ' , date: '8 مهر 1401 '},
]



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

// Setting Slider Image 
$(document).ready( function (){
    $('.slider').slick({
        rtl: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
        autoplay: true,

    });

  })


// Style companies

for(let i = 0 ; i<companiesContainer.length ; i++){
    companiesContainer[i].addEventListener('mouseenter' , function (){

        for(let x = 0 ; x < companiesContainer.length ; x++){
            companiesContainer[x].style.opacity = '.4'
        }
        companiesContainer[i].style.opacity = "1"
    })
}


let newProductFragment = document.createDocumentFragment()

// create Product Item 

allProductCartArray.forEach(function (product){

    let productCard = document.createElement('div')
    productCard.className = 'product-card'

    let productCardTitle = document.createElement('h3')
    productCardTitle.className = 'product-card__title'
    productCardTitle.innerHTML = product.title

    let productCardText = document.createElement('p')
    productCardText.className = 'product-card__text'
    productCardText.innerHTML = product.description


    let productCardImage = document.createElement('div')
    productCardImage.classList.add("product-card__image")

    let productImage = document.createElement('img')
    productImage.classList.add("product-card__img")
    productImage.setAttribute('src' , product.image)


    let productCardInfo = document.createElement('div')
    productCardInfo.className = 'product-card__info'

    let productCardPrice = document.createElement('p')
    productCardPrice.className = 'product-card__price'
    productCardPrice.innerHTML = product.price 

    let productCardBtn = document.createElement('a')
    productCardBtn.className = 'product-card__btn'
    productCardBtn.setAttribute('href' , "product.html?id=" + product.id)
    productCardBtn.setAttribute('target' , '_blank')
    productCardBtn.innerHTML = 'توضیحات کامل'


    productCardInfo.append(productCardPrice , productCardBtn)

    // append all Element To fragment
    productCardImage.append(productImage)

    productCard.append(productCardTitle , productCardText , productCardImage , productCardInfo);

    newProductFragment.append(productCard)
})
// append All Element To Dom
ProductItemContainer.append(newProductFragment)



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

// set weblog Post 

allWeblogArray.forEach( function (weblog){
    weblogContainer.insertAdjacentHTML('beforeend' , '<div class="Weblog-item"><a href="pages/weblog.html?id='+ weblog.id +'" target="_blank"><div  class="Weblog-image"><img src="'+ weblog.image +'" alt="weblog image" class="Weblog-image__pic"></div></a>'+
 '<div class="Weblog-details"><h5 class="Weblog-details__title"> '+ weblog.title +' </h5><p class="Weblog-details__text"><i class="fa fa-calendar-days"></i> '+ weblog.date +' </p></div></div>')
})





// Set All Event Dom
userLoginBtn.addEventListener('click', userLoginFormShow);
userLoginBtnClose.addEventListener('click' , userLoginFormClose);
overlayContainer.addEventListener('click' , overlayContainerControl);
shoppingCartBtn.addEventListener('click' , shoppingCartShow);
shoppingCartCloseBtn.addEventListener('click' , shoppingCartClose);
switchDarkMode.addEventListener('click', setDarkMode);
headerIconBtn.addEventListener('click' , menuToggle);




