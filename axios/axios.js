// npm - node package manager

// const { default: axios } = require("axios")

// const { default: axios } = require("axios");

// axios - бул база данныеден маалымат тартып алчу библиотека (fetch ке окшош ) 

// fetch : 
// fetch = 'https://jsonplaceholder.typicode.com/posts'
//     .then((data)=> data.json())
//     .then((res)=>{

//     })


const row = document.querySelector('.countries')
const input = document.querySelector('.text-input')
const btn = document.querySelector('.btn-search')
const select = document.querySelector('#select')
const select2 = document.querySelector('#select2')
const option = document.querySelectorAll('.option')





btn.addEventListener('click', ()=>{
    searchCountry()
})
function searchCountry(){
    axios.get(`https://restcountries.com/v3.1/name/${input.value}`)
    .then((res)=>{
        res.data.map((el,idx)=>{
            row.innerHTML = `<div class='col-4 my-2'>
            <h1> ${idx + 1}</h1>
            <img src=" ${el.flags.svg}" alt="" / width='300' height='200'>
            <h2>${el.name.common}</h2>
           <p>Aянты: ${el.area}км <sup>2</sup></p>
           <p>Калкы: ${el.population}</p>
           <p>Борбору: ${el.capital ? el.capital : 'жок'}</p>
           <p>Region: ${el.region}</p>
             </div>`
        })
    })
}

input.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        searchCountry()
    }
})

let result_data = null
axios.get('https://restcountries.com/v3.1/all')
.then((result)=>{
    // console.log(result.data);
    result_data = result.data
    getCountry(result.data)
})

console.log(result_data)
function getCountry(data){
    window.scroll(0,0)
    row.innerHTML = ''
   data.map((el,idx)=>{
        row.innerHTML += `<div class='col-4 my-2'>
       <h1> ${idx + 1}</h1>
       <img src=" ${el.flags.svg}" alt="" / width='300' height='200'>
       <h2>${el.name.common}</h2>
      <p>Aянты: ${el.area}км <sup>2</sup></p>
      <p>Калкы: ${el.population}</p>
      <p>Борбору: ${el.capital ? el.capital : 'жок'}</p>
      <p>Region: ${el.region}</p>
        </div>`
    })
}
 
select.addEventListener('change', (e)=>{
    let {value} = e.target
     if(value === 'population'){
        let result = result_data.sort((a,b)=> {
           return b.population - a.population
        })
        getCountry(result)
     }else if(value === 'area'){
        let result = result_data.sort((a,b)=> {
            return b.area - a.area
         })
         getCountry(result)
     }else if(value === 'A-Z'){
        let result = result_data.sort((a,b)=> {
            return b.name.official < a.name.official ? 1 : -1
         })
         getCountry(result)
     }else if(value === 'Z-A'){
        let result = result_data.sort((a,b)=> {
            return b.name.official < a.name.official ? -1 : 1
         })
         getCountry(result)
     }
})

select2.addEventListener('change',(e)=>{
    let {value} = e.target
    if (value === 'Africa'){
        let result = result_data.filter((el)=>{
            return el.region === 'Africa'
        })
        getCountry(result)
    }else if(value === 'Asia'){
        let result = result_data.filter((el)=>{
            return el.region === 'Asia'
        })
        getCountry(result)
    }else if(value === 'Europe'){
        let result = result_data.filter((el)=>{
            return el.region === 'Europe'
        })
        getCountry(result)
    }else if(value === 'Americas'){
        let result = result_data.filter((el)=>{
            return el.region === 'Americas'
        })
        getCountry(result)
    }else if(value === 'Antarctic'){
        let result = result_data.filter((el)=>{
            return el.region === 'Antarctic'
        })
        getCountry(result)
    }else if(value === 'Oceania'){
        let result = result_data.filter((el)=>{
            return el.region === 'Oceania'
        })
        getCountry(result)
    }
})