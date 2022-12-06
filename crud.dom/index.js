// CRUD
// Create Rename Update Delete
// to do list

const input = document.querySelector('.text-input')
const btn = document.querySelector('.add-btn')
const ul = document.querySelector('.list')


btn.addEventListener('click', () => addNewList() )
input.addEventListener('keydown', (e) => {
  switch (e.key) {
    case "Enter" :
      addNewList()
      break;
    case "Delete" :
      input.value = ""
      break;
  }
})

function addNewList() {
  if (input.value !== "") {
    let newList = `<li class="  list-group-item d-flex justify-content-between align-items-center">
    <span class=" d-flex align-items-center">
    <input type="checkbox" class="list check mx-1">
${input.value}
</span>
<button class="del-btn btn btn-danger">delete</button>
</li>`
    ul.innerHTML += newList
  }
  input.value = ""
}



ul.addEventListener('click', (e) => {
  console.log(e.target.classList)
  if (e.target.classList.contains('del-btn')) {
    e.target.parentNode.remove()
  }else if(e.target.classList.contains('check')){
    // e.target.parentNode.classList.toggle('line')
   
    if(!e.target.parentNode.classList.contains('line')){
        e.target.parentNode.classList.add('line')
    }else{
        e.target.parentNode.classList.remove('line')
        }
    }
  }
)