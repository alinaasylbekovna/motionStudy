// const { default: axios } = require("axios")

// const { default: axios } = require("axios");

const row = document.querySelector('.dogs_btn')
const all_Btn = document.querySelectorAll('.all_btn')
console.log(all_Btn);
const image = document.querySelector('.image')



axios('https://dog.ceo/api/breeds/list/all')
    .then(res=>{ 
        Object.keys(res.data.message).map((el)=>{
            row.innerHTML += `<button class='all_btn btn btn-primary m-1'>${el}</button>`
        })
    }).then((result)=>getImage())

    

function getImage() {
    all_Btn.forEach((btn)=>{
        console.log(btn);
        btn.addEventListener('click',()=>{
            console.log('true');
            axios(`https://dog.ceo/api/breed/${all_Btn.innerHTML}/images/random`)
                .then((dogs)=>{
                    console.log(dogs.data);
                })
        })
    })
}







