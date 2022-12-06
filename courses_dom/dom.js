// //  ================= Random Color ====================
// const parentDiv = document.querySelector('.container')
// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')
// const body = document.querySelector('body')
// // const container = document.querySelector('.container')
// const square = document.querySelector('.square')

// const triangle = document.querySelector('.triangle')
// const circle = document.querySelector('.circle')




// let quantity = 676
// for ( let i = 0; i < quantity; i++){
//     const box = document.createElement('div')
//     parentDiv.append(box)
//     // box.setAttribute(randomColor())
//     box.setAttribute('class', 'triangle')

//     // box.addEventListener('mouseover',()=>{
//     //     randomFigure(box)
//     // })
    
//     box.addEventListener('mouseover',()=>{
//        setColor(box)
//     box.addEventListener('mouseleave',()=>{
//         clean(box) 
//     })    
//     })


//     btn1.addEventListener('click',()=>{
//         console.log('click')
//         box.style.background = randomColor()
     
//         body.style.backgroundColor = randomColor()
//     })
//     btn2.addEventListener('click',()=>{
//         clean(box)
        
//         body.style.backgroundColor = ''
//     })
// }

// function setColor (item){
//     let color = randomColor() 
//     item.style.background = color
//     item.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
//     item.style.transform = 'scale(1.1) '
// }
// function clean (item){
//     item.style.background = '#1d1d1d'
//     item.style.boxShadow =''
//     item.style.transform = 'scale(1) '
// }



// function randomColor(){
//     let colorLetter = 'abcdef1234567890'
//     let color = '#'
//     for (let i= 0; i < 6; i++){
//         let items= Math.floor(Math.random() * colorLetter.length)
//         color += colorLetter[items]
//     }
// return color
// }

// console.log(randomColor()) 


// let people = 1100000
// let n = 0
// while(people < 330000){
//     let result = people + 33000
//     return result
//     n++
// }
// console.log(n)

// let square = document.createElement('div')


// let triangle = document.createElement('div')
// let circle = document.createElement('div')
// square.setAttribute('class','square')
// triangle.setAttribute('class','triangle')
// circle.setAttribute('class','circle')
// container.append(square)
// container.append(triangle)
// container.append(circle)
 
// let figure = []
// figure.push(square,triangle,circle)
// console.log(figure)
// function randomFigure(){
//     let indx = Math.floor(Math.random() * figure.length)
//     let result = figure[indx]
//     return result
// }
// // console.log(randomFigure())
// randomFigure();




// ============== Task ===============

// Task 1
// Напишите функцию, которая вернет текст внутри первого тэга - a.

// const a = document.querySelector('a')
// function returnA(){
//    return a.innerHTML
     
// }
// console.log(returnA())




// Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.
// const tagA = document.querySelectorAll('a')
// let result = []
// function getText (){
//    tagA.forEach ((el)=>{
//     result.push(el.innerHTML) 
//    })
//    return result
// } 
// console.log(getText())




// Task 3
// Напишите функцию, которая вернет массив с текстами внутри тэгов элементов с классом nav__link__item
// const getTag = document.querySelectorAll('.nav__link__item')
// console.log(getTag)
// function getArray (){
//     let result = []
//     getTag.forEach ((el)=>{
//             result.push(el.innerHTML) 
//            })
//            return result
  
// }
// console.log(getArray())


// Task 4
// Напишите функцию, которая вернет массив со значениями атрибута class внутри тэгов элементов с классом nav__link__item
// const getTag = document.querySelectorAll('a')
// function getArray (){
//     let result= []
//     getTag.forEach((el)=>{
//         result.push(el.getAttribute('class','nav__link__item'))
//     })
//     return result
// }
// console.log(getArray())


// Task 5
// Напишите функцию, которая вернет массив со значениями атрибута data-link внутри тэгов элементов с классом nav__link .

// const navLink = document.querySelectorAll('.nav__link')

// function getValue (){
//     let result = []
//     navLink.forEach((el)=>{
//         result.push(el.getAttribute('data-link'))
//     })
//     return result
// }
// console.log(getValue())



// Task 6
// Вы пишете робота, который проверяет, что страница отображается корректно, по правилам внутри элемента
//  с классом nav__link должен быть текст порядкового номера индекса. И у этого же элемента должен быть 
// класс с текстовым номером индекса.
// Например
// <a class="nav__link  first" data-link="1">first</a>  
// Но база данных была повреждена и по ошибке некоторые элементы стали отображаться с некорректно.
// <a class="nav__link  zero" data-link="0">first</a>  
// Ваша задача вернуть массив атрибутов data-link у элементов, у которых сломана логика. То есть текст внутри не имеет соответствующего класса.
// Используйте map для обхода массива. Иными словами элемент считается сломанным если в классах не содержится текста элемента.-

// const nav__link = document.querySelectorAll('.nav__link')
// console.log(Array.from(nav__link).map((el)=>{
  
//     if ( el.classList[1] !== el.innerHTML){
//         return el.getAttribute('data-link')
//     }
// }))




// Task 7
// Обновите текст всех элементов с классом nav__link , по следующему шаблону
// <a href="#" class="nav__link zero" data-link="0">zero</a> 
// Стало
// <a href="#" class="nav__link zero" data-link="0"> 0 zero</a>
// <a href="#" class="nav__link first" data-link="1">five</a>
// Стало
// <a href="#" class="nav__link first" data-link="1">1 first</a>
// То есть `${data-link
// Используйте forEach
// yourElementsArray.forEach((element) => {  
  
// })  


// const navLink = document.querySelectorAll('.nav__link')
// navLink.forEach((el)=>{
//     el.innerHTML = `${el.getAttribute('data-link')} ${el.classList[1]}`
//     console.log(el)
// })




// Task 8
// Вы знаете, что в документе есть сломанные элементы с классом nav__link. Удалите их на странице. Для удаления используйте forEach`.
// Что бы удалить элемент из DOM - используйте метод .remove()

// yourElementsArray.forEach((element) => {  
  
// })  

// const nav__link = document.querySelectorAll('.nav__link')
// console.log(Array.from(nav__link).map((el)=>{
  
//     if ( el.classList[1] !== el.innerHTML){
//         return el.remove
//     }
//     return el
// }))



// Task 9
// Напишите функцию, которая добавляет div элемент внутрь элемента с селектором #append-div
// у дива должен быть айди #just-text и текст внутри Hello


// const appensDiv = document.querySelector('#append-div')

// function creatDiv(){
//     let div = document.createElement('div')
//     div.setAttribute('id','just-text ')
//     div.innerHTML = 'Hello'
//     appensDiv.append(div) 
// return appensDiv

// }
// console.log(creatDiv())




// Task 10
// Напишите функцию, которая добавляет ul элемент внутрь элемента с селектором #append-div у ul элемента должен быть айди #list
//  Внутри ul элемента находится 10 тегов li с текстом от Child 1,...., Child 10
// Используйте:
// document.createElement(tagName).
// element.appendChild(element2).
// и другие...

// function getUl (){
//     let creatUl = document.createElement('ul')
//     creatUl.setAttribute('id','list')
//     for (let i = 1; i <= 10; i++){
//         let creatli = document.createElement('li')
//         creatli.innerHTML = `Child ${i}` 
//         console.log(creatUl.append(creatli) )
//     }
//     return appensDiv.append(creatUl) 
// }
// console.log(getUl())


// Вопрос-ответ:





// const firstBtn = document.querySelector('.btn-1');
// const secondBtn = document.querySelector('.btn-2');
// const input = document.querySelector('input');
// const ul = document.querySelector('ul')

//  firstBtn.addEventListener('click',()=>{
//     let li = document.createElement('li')
//     li.innerHTML = input.value
//     ul.appendChild(li)
//      input.value = ''
//  })
//  secondBtn.addEventListener('click',()=>{
//     li.innerHTML = ''
//  })

// const block = document.querySelector('.block')

// firstBtn.addEventListener('click', ()=>{
//     block.classList.add('active')
//     block.style.background = 'red'
// })

// secondBtn.addEventListener('click', ()=>{
//     block.classList.remove('active')
//     block.style.background = 'crimson'
// })


// const question = document.querySelector('.question');
// const answer = document.querySelector('.answer')
// // console.log(answer)
// firstBtn.addEventListener('click',()=>{
//     answer.innerHTML = 'Aleycym salam'
   
//  })

// const form = document.querySelector('.form');
// const login = document.querySelector('.input-login');
// const password = document.querySelector('.input-password');
// const btn = document.querySelector('.btn');
// const p = document.querySelector('p')

// // motion@web.com
// // 12345678


// let attemps = 3
// form.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   if (login.value === 'motion@web.com' && password.value === '12345678'){
//       p.innerHTML = 'Welcome'
//  }else{
//   attemps--
//   if (attemps === 2){
//   p.innerHTML = 'please try again'
//  }else if (attemps === 1){
//   p.innerHTML = 'please try later'
//  }else {
//   p.innerHTML = 'Access closed'
//   btn.setAttribute('disabled','acces')
//  }

//  }
 
// })
















