// const promise = new Promise((resolve,reject)=>{
//     console.log('start!')
//     setTimeout(()=>{
//         console.log('fulfilled')
//         // reject({status:200})
//         resolve({status:200})
        
//     },2000)
// })
//  promise
//  .catch((res)=>{
//     console.error('Error')
//  })
//  .then((data)=>{
//     console.log(data)
//  })
 

const select = document.querySelector('.select')
const paragraf = document.querySelector('.paragraf')
const btnAll = document.querySelector('#btn')
const parAll = document.querySelector('.parAll')
const btn = document.querySelector('#btn')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((data)=> data.json())
    .then((res)=> {
        // console.log(res)
        for (let i = 1; i <= res.length; i++){
          var option = document.createElement('option')
          option.innerHTML += i
          option.value = i
          option.classList.add('option')
          select.append(option)
        }

        select.addEventListener("change", (e) => {
          let obj = res.find(el => {
            return +e.target.value === el.id
          });
          paragraf.innerHTML = `<div>${obj.title}</div>`
        })
  
          btnAll.addEventListener('click', ()=>{
                if (!btnAll.classList.contains('active')){
                  res.map((el)=>{
                    btnAll.classList.add('active')
                    parAll.innerHTML += `<div class='AllContent'>
                    <span class='content'> ID:${el.id} <p> USERiD:${el.userId} <p> TITLE:${el.title} <p> BODY:${el.body} </span></div>`
                    btn.textContent = 'open All'
                  })
                }else{
                    btnAll.classList.remove('active')
                    parAll.innerHTML = ''
                    btn.textContent = 'close All'
                }
            
             
          })
                
       
 })

