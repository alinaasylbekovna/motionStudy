const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.header-menu')
const burgerItem = document.querySelector('.berger2')



burgerMenu.addEventListener('click', ()=>{
 if (!burgerMenu.classList.contains('active')){
      burgerMenu.classList.add('active')
    navMenu.style.right = '0'
    burgerItem.style.opacity = '0'
    burgerItem.previousElementSibling.style.transform = ' translateY(23px) rotate(45deg)'
    burgerItem.previousElementSibling.style.transform = '  rotate(45deg)'
    burgerItem.nextElementSibling.style.transform = 'translateY(-23px) rotate(-45deg)'
 }else{
  burgerMenu.classList.remove('active')
    navMenu.style.right = ''
    burgerItem.style.opacity = ''
    burgerItem.previousElementSibling.style.transform = ''
    burgerItem.nextElementSibling.style.transform = ''
 }
})