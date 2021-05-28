const benefitsHidden = document.querySelector('.hidden'),
    moreInfo = document.querySelector('.more_info'),
    hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menuLink= document.querySelectorAll('.menu_link');

moreInfo.addEventListener('click', () => { 
    benefitsHidden.classList.toggle('hidden');
});
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('active');
});
menuLink.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('active');
    })
})
 