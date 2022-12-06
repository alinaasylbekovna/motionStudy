const input = document.querySelector('.text-input');
const btn = document.querySelector('.btn-add');
const ul = document.querySelector('.list')

// // localStorage.setItem('task',JSON.stringify([{id:1, title:'go to school', isDone:false},{id:2, title:'go to office', isDone:false}]) )
// // console.log(JSON.parse(localStorage.getItem('task')))


// localStorage.setItem('task',JSON.stringify([]))

const classes =  {
    li : 'list-group-item d-flex justify-content-between align-items-center ',
    btn: 'del-btn btn btn-danger ',
    span : 'd-flex align-items-start',
    checkbox : 'check-box'
}


function view (){
    let tasks = JSON.parse(localStorage.getItem('task')) || []
    let allList = ''
    tasks.map((el)=>{
         allList += `<li class ='${classes.li}'>
         <span class ='${classes.span} ${el.isDone ? "line": ""}'><input type="checkbox" ${el.isDone? "checked" :""} class = '${classes.checkbox} '/>  ${el.title}</span>
        
         <button class='${classes.btn}'>delete</button>

         </li>`
    })
    ul.innerHTML = allList
    input.value = ''
    input.focus()

    delTask()

}
view()

function addTask (){
    if (input.value !== ''){
        let tasks = JSON.parse(localStorage.getItem('task')) || []
        const newTask = {
            id : tasks.length ? tasks[tasks.length -1 ].id + 1 : 1,
            title: input.value,
            isDone : false
        }
        tasks = [...tasks, newTask]
        localStorage.setItem('task',JSON.stringify(tasks))
       
    }
     view()
     changeStatus()
}

btn.addEventListener('click',()=>{
    addTask()
})
 
input.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter'){
        addTask()
    }
})

function delTask () {
    let tasks = JSON.parse(localStorage.getItem('task')) || []
    const buttons = document.querySelectorAll('.del-btn')
    buttons.forEach((btn,idx)=>{
        btn.addEventListener('click',()=>{
            tasks = tasks.filter((el,index)=>{
                return idx !== index
            })
            localStorage.setItem('task',JSON.stringify(tasks))
            view()
        })
   })
}
delTask()

function changeStatus(){
    let tasks = JSON.parse(localStorage.getItem('task')) || []
    const checkBoxes = document.querySelectorAll('.check-box')
    checkBoxes.forEach((check,idx)=>{
        check.addEventListener('click',()=>{
            tasks = tasks.map((el,index)=>{
                if (idx === index){
                   check.parentNode.classList.toggle('line')
                    return {
                        ...el, 
                        isDone: !el.isDone
                    }
                }else{
                    return el
                }
            })
            localStorage.setItem('task',JSON.stringify(tasks))          
        })
    })
}
changeStatus()