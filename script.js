const burgerButton = document.querySelector('.burger-icon');
const burgerNav = document.querySelector('.menu');
const invisible = document.querySelector('.none');
let active = false; 

burgerButton.addEventListener('click', function(e) {
    e.preventDefault();
    if(!active) {
         burgerButton.classList.add('is-center');
        setTimeout(()=> {
            burgerNav.classList.add('is-active');
            burgerButton.classList.add('is-active');
            invisible.classList.remove('none');
        }, 200) 
    } else {
        setTimeout(()=> {
            burgerButton.classList.remove('is-center');
        }, 200)
        burgerNav.classList.remove('is-active');
        burgerButton.classList.remove('is-active');
        invisible.classList.add('none');
    }
    active = !active;
})