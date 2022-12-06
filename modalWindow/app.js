const modalBtn = document.querySelector('.modal-btn')
const modalWindow = document.querySelector('#modal')
const closeWindow = document.querySelector('.close')



modalBtn.addEventListener('click',()=>{
  if (!modalBtn.classList.contains('active')){
    modalBtn.classList.add('active')
    modalWindow.style.transform = 'scale(1)'
  }else{
   closeModalFn()
  }
})


function closeModalFn (){
    modalBtn.classList.remove('active')
    modalWindow.style.transform = 'scale(0)'
}

closeWindow.addEventListener('click',()=>{
    console.log(1)
closeModalFn()
})



window.addEventListener('click',(e)=>{
    if(e.target !== modalWindow.innerHTML  && e.target !== modalBtn){
       closeModalFn()
    }
})