let slider = document.querySelectorAll('.slider');
let input = document.querySelectorAll(".slide")
let createBtn = document.querySelector('.button');
let openBtn = document.querySelector('.open_popup_btn')
let closeBtn = document.querySelector('.popup_close')
let scrollBtn = document.querySelector(".foo")
let footer = document.querySelector("footer")
let stars = document.querySelectorAll(".stars i")
let descripBtn = document.querySelector('.item-description-btn')
let itemDescrip = document.querySelector('.item-description')
let paymentContent = document.querySelector(".payment-content-validation");


let counter = 0;
setInterval(function() {
    counter++
    if (counter == 1) {
        input[0].style.opacity = '1';
        input[1].style.opacity = '0';
        input[2].style.opacity = '0';
    } else if (counter == 2) {
        input[0].style.opacity = '0';
        input[1].style.opacity = '1';
        input[2].style.opacity = '0';
    } else if (counter == 3) {
        input[0].style.opacity = '0';
        input[1].style.opacity = '0';
        input[2].style.opacity = '1';
        counter = 0
    }
},2000);


openBtn.addEventListener("click", function() {
    document.querySelector(".popup").classList.add("open")
})

closeBtn.addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("open")
})

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
      stars.forEach((star, index2) => {
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
      });
    });
  });


function scrollToFooter(sum) {
    window.scroll({
        left: 0,
        top: sum.offsetTop,
        behavior: 'smooth'
    })
}

scrollBtn.addEventListener('click', () => {
    scrollToFooter(footer)
})


function scrollToDescription(sum) {
    window.scroll({
        left: 0,
        top: sum.offsetTop,
        behavior: 'smooth'
    })
}

descripBtn.addEventListener('click', () => {
    scrollToDescription(itemDescrip)
})

