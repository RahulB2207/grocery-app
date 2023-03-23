/*toggle method this method basically add with onclick event which add and remove the attribute on the targted  element one we first click then class attribute added when we click second time then that added class attribute gets removed*/
let searchform = document.querySelector(".search-form");


document.querySelector("#search-btn").onclick = ()=>{
   searchform.classList.toggle('active1');
   cart.classList.remove("active2");
   login.classList.remove("active3");
   menu.classList.remove("active");
};

let cart = document.querySelector(".cart");

document.querySelector("#cart-btn").onclick = ()=>{
    cart.classList.toggle("active2");
    searchform.classList.remove('active1');
    login.classList.remove("active3");
    menu.classList.remove("active");
}

let login = document.querySelector(".login-form");

document.querySelector("#user").onclick = ()=>{
    login.classList.toggle("active3");
    searchform.classList.remove('active1');
    cart.classList.remove("active2");
    menu.classList.remove("active");
};

let menu = document.querySelector(".nav-bar");

document.querySelector("#menu").onclick = ()=>{
    menu.classList.toggle("active");
    searchform.classList.remove('active1');
    cart.classList.remove("active2");
    login.classList.remove("active3");
}

window.onscroll = () =>{
    searchform.classList.remove('active1');
    cart.classList.remove("active2");
    login.classList.remove("active3");
    menu.classList.remove("active");
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 25,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay:{
            delay:3000,
            disableOnInteraction:false,
        },
        centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });