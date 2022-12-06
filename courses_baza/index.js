// console.log('hello world');


// const centery = 'axewatersdtrfbiygoijnoidshciugdny8k';

// // // console.log(centery(math.floor(centery.length / 2)));
// // // // console.log(centery[17]);
// // console.log(centery[Math.floor(centery.length / 2)]);
// // console.log(centery[centery.length - 1])

// console.log(centery.slice(2,7));


// const str = 'Novis LIDB TECH';
// console.log(str.substring(0,5).length);

// const str = 'максимально УЖАСНО';
// console.log(str.substring(11).toLowerCase())

// const str = 'максимально УЖАСНО';
// console.log(str.slice(0,11).toUpperCase())


// function year(month) {
//     if (month == 1 || month == 2 || month == 3){
//         console.log('winter')
//     }else if (month == 4 || month == 5 || month == 6){
//         console.log('spring')
//     } else if(month == 7 || month == 8 || month == 9){
//         console.log('summer')
//     }else if(month == 10 || month == 11 || month == 12){
//         console.log('outumn')
//     }else{
//         console.log('error')
//     }
// }
// console.log(year(3))


// let a = ['a','b','c','d']
// a.push(1,2,3)
// // console.log(a)

/////////////////////////////////////////////
// let a  = ['a','b','c']
// let b = ['d','f','g']
// console.log(...a,...b) // spread операторы



// //////////////
// let a  = ['1','2','3','4','5']

// console.log(a.slice(0,3))
// let a  = ['1','2','3','4','5']
// console.log(a.splice(3,0,'a','b','c'))


// function sum(arr){
//     return arr.filter(function(el){
//         return el.toLowerCase().includes('к')
//     })
    
// }
// console.log(sum(['аскар','баяман','калмамат']))

// let arr = [ 4, 59, 49 ];
// console.log(arr.map((el,index)=>{
//     return el ** 2
// }))



// let arr = [ 4, 59, 49,-143,-255,-67 ];
// console.log(arr.filter((el,index)=>{
//     return el > 0
// }))


// let arr = [ 4, 59,8,10, 49,-143,-255,-67 ];
// console.log(arr.filter((el,index)=>{
//     return el % 2===0
// }))


// let arr = ['аскар','баяман','калмамат'];
// console.log(arr.filter((el,ind)=>{
//     return el.length > 5
// }))

// let  arr = [-13,96,-41,-28,40]

// console.log(arr.filter((el,index)=>{
//     return el < 0
// }).length)


// let arr = [3,51,-30,-54.60 ]
// console.log(arr.filter((el,index)=>{
//     return el > 30
// }).map((el,index)=>{
//     return Math.sqrt(el)
// }))




// let arr = [55,44,55,44,19,87]
// console.log(arr.filter((el)=>{
//     return arr.indexOf(el) == arr.lastIndexOf(el)
// }))




// function trueElem(arr){
//     return arr.filter((el)=>{
//         return el
//     })
// }
// console.log(trueElem([false,undefined,null,NaN,0,-17,77]))



// function arr1 (arr){
//     return arr.map((el)=>{

//         return el.length
//     })
// }
// console.log(arr1(['Бегимай','Баяман','Калмамат']))





////////////////////////////////////////////////////////////
// reduse()
// sort()



//  let arr = [10,20,30,40,50]
//  console.log(arr.reduce((acс,currentValue,index,array)=>{
//    return acс + currentValue
//  }),0)


// let arr = ['alina','aidana','ainura','nazgul']
// console.log(arr.reduce((acc,currenValue,index,array)=>{
//    return acc + currenValue
// }),'')



/*  =============  задачи ============== */

// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.
//  let arr = [5,15,315,2,13,20,9]
//  console.log(arr.reduce((acс,currentValue,index,array)=>{
//    return acс + currentValue
//  }),0)



// 2. Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.
//    let arr = [5,15,315,2,13,20,9]
//  console.log(arr.filter((el,index)=>{
//     return el % 2 === 0
// }).reduce((acc,currentValue)=>{
//    return acc + currentValue
// }))



// 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.
//    let arr = [5,15,315,2,13,20,9]
//  console.log(arr.filter((el,index)=>{
//     return el > 10
// }).reduce((acc,currentValue)=>{
//    return acc + currentValue
// }))


// 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.
// let arr = [3,13,54,15,335, 39]
//  console.log(arr.filter((el,index)=>{
//     return el > 10
// }).reduce((acc,currentValue)=>{
//    return acc - currentValue
// }))


// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.

// let arr = ['Аскар', 'Баяман', 'Калмамат']
// console.log(arr.reduce((acc,currenValue,index,array)=>{
//    return acc + currenValue
// }).length)



// 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все строки в верхнем регистре, используя map.
// let arr = ['Аскар', 'Баяман', 'Калмамат']
// console.log(arr.map((el,index)=>{
//    return el.toUpperCase()
// }))


// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все вторые строки в верхнем регистре.

// function upper (arr){
//    arr.map((el,index)=>{
//       if (index % 2 === 0){
//          return el.toUpperCase()
//       }else{
//          return el
//       }
//    })
// }
// console.log(upper(['Аскар', 'Баяман', 'Калмамат']))



// 8. Напишите функцию, которая принимает str, target. И возвращает true или false, если targer присутствует в str.
//  Использовать .reduce для этого.
// function isPresent (str,target){
//    return str.split().reduce((acc,currentVallue)=>{
//         if (acc + currentVallue == target){
//          console.log(true) 
//       }else{
//          return false
//       }
//    })
//  }
//  console.log( isPresent ('alina','a'))
// Пример: isPresent ('abcd', 'b') => true
// isPresent ('efghi', 'a') // => false



// 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.
// Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]

// let arr = ['асКар', 'бЯяман', 'калМмамат']
// console.log(arr.map((el,index)=>{
//   return  el.toUpperCase().
// }))
// 10. Вам дан массив со строками ['Баяман', 'Калмамат']. Поменяйте местами первые буквы строк.
// function names(array) {
//    return array.map((value,index) =>{
//        return value.replace("Б","К")
//    }).reduce((acc,Value,index,array) =>{
//        return acc + " " +Value.replace("К","Б")
//    })
// }
// console.log(names(['Баяман', 'Калмамат']))
// 11. Вам дан массив [true, '1234', 325]. Напишите функцию, которая проверяет, все ли элементы массива 
// относятся к одному типу данных.

// function check (arr){
//    return arr.reduce((acc,currenValue)=>{
//       if (typeof(acc) === typeof(currenValue)){
//          return true
//       }else{
//          return false
//       }
//    })
// }
// console.log(check([true, '1234', 325]))

// console.log(check([325, 325, 325]))



// 12. Вам дана строка 'тестинг'. Ваша задача - вернуть средний символ слова. Если длина слова нечетная,
//  верните ср(едний символ. Если длина слова четная, вернуть 2 средних символа.
// function word (str){
//     if (str.length % 2 === 0){
//         return str[str.length / 2- 1]+ str[str.length / 2 ]
//     }else{
//         return str[Math.floor(str.length / 2)]
//     }
// }
// console.log(word('testinga'))


// 13. Вам дан массив с числами [5, -3, 13, -7, 45]. Верните сумму всех положительных чисел.
// let arr = [5, -3, 13, -7, 45]
// console.log(arr.filter(( el,index )=>{
//     return el > 0
// }).reduce((acc,currenValue)=>{
//     return acc + currenValue
// }))



// 

// 15. Вам дан массив с числами [1, 65, 13 , 30, 100] - все числа - доллары. 
// // Вам нужно обменять эти доллары по курсу сома и вывести все числа в сомах.
// function dollar (arr){
//     return arr.map((el,index)=>{
//         return el * 80
//     })
// }
// console.log(dollar([1, 65, 13 , 30, 100]))



// 16. Вам дан массив со строками ['Lorem ipsum dor sit omet devour il ela sit']. Выведите каждый нечетный индекс в строке в верхнем регистре.
// function upper (arr){
//     return arr.map((el,index)=>{
//         return el.split('').map((el,index)=>{
//             if (index % 2 === 0 ){
//                 return el.toUpperCase()
//             }else{
//                 return el.toLowerCase()
//             }

//         }).join()
//     })
// }
// console.log(upper(['Lorem ipsum dor sit omet devour il ela sit']))


// 17. Вам дан массив с строками ['Оскар', 'Баяман', 'Калмамат']. Добавьте к каждой строке нумерацию.

// function num (arr){
//      arr.map((el,index)=>{
//         return index + 1 + '. ' + el
//     })
// }
   
// console.log(num(['Оскар', 'Баяман', 'Калмамат']))

// let arr = ['Оскар', 'Баяман', 'Калмамат']
// for (let i = 0; i < arr.length; i++ ){
//     arr[i] = (i+1) + '. ' + arr[i]
// }
// // console.log(arr.join())



// // 18. Вам дан массив с числами [2,456,6,8]. Напишите функцию , которая вставляет дефис (-) между каждыми двумя четными числами.
// //  Например, если вы принимаете 025468, на выходе должно быть 0-254-6-8.
// function defiss (arr){
//   return arr.join(' ').filter((el,index)=>{
//    return el % 2 === 0
//   })
// }
    

// console.log(defiss([2,456,6,8,9]))



// 20. Вам дан массив с числами [5,15,315,2,13,20,9]. Посчитайте среднее арифметическое чисел в массиве.
// let arr = [5,10,20]
// console.log(arr.reduce((acc,currentVallue)=>{
//     return Math.floor((acc + currentVallue))
// })/ arr.length)




// function sort (arr){
//    return arr.map((el,index)=>{
//         if (Math.sqrt(el) % 1 === 0 ){
//             return Math.sqrt(el)
//         }else{
//             return el **2
//         }
//     })
// }
// console.log(sort([4,3,9,7,2,1]))


// function camelCase (arr){
//     return arr.split('-').map((el,index)=>{
//         if (index !== 0){
//             return el[0].toUpperCase() + el.slice(1)
//         }else{
//             return el.toLowerCase()
//         }   
//     }).join('')
// }
// console.log(camelCase('the-strealth-warrior'))


///////////////////////////////////////////
// function toCamelCase(str){
//     let strArray;
//     if (str === ''){
//         return '';
//     }
//     if (str.indexOf('-')){
//         strArray = str.split('-')
//     }else{
//         strArray = str.split('_')
//     }
//     let ccString = strArray[0];
//     for (let i = 0; i < strArray.length; i++) {
//         ccString += capitalize(strArray[i]);
//     }
//     return ccString;
// }
// let capitalize = (str)=>{
//     return str[0].toUpperCase()+ str.slice(1)
// }
// console.log(toCamelCase('the-strealth-warrior'))
////////////////////////////////////////////////////////////////


// let num = 9119;
// let str = num.toString()
// console.log(str.split('').map((el,index)=>{
//     return el ** 2
// }).join('')
// )








// ======================= Object ===============

// let user = {
//     id: 1,
//     name: 'Alina',
//     surname: 'Asanova',
//     adress: {
//         sity : 'Bishkek',
//         street : 'Arsha-Behsik',
//         'house' : 19 // '' - можно
//     },
//     hobbies:['chess','book','sleeping','watch a film'],
//     married : false
// }
// user.name = 'bekbol'// изменение
// console.log(user.age = 16) // добовляет
// delete user.house // удаляет
// Object.freeze(user) //замараживает
// console.log(user[house]) // [] квадратный скобка мн кайрылуу
// /////////
// let link = 'house'
// console.log(user[link]) // через переменные кайрылуу
// /////////

// console.log(user)
// console.log(user.adress.street)
// console.log(user.hobbies.map((el,index)=>{
//     return el[0].toUpperCase() + el.slice(1)
// }))







// ====================== мутация ================

// let arr1 = [1,2,3,4,5,6,7,89,0,]
// let arr2 = arr1

// console.log(arr1)
// console.log(arr2)

// arr1.sort((a,b)=> a-b)

// console.log('arr1- ',arr1)
// console.log('arr2 - ',arr2) ////// до этого arr2 мутация болду

// let arr3 = [...arr1] /// чтобы избежать от мутации надо использовать spreed operator [...elem]
// console.log('arr3- ',arr3) // ...  вот это ознозает что мы копируем элемент и вставим на другую позицию.



/// fill()
 
// function fillArr(length, value){
//     return new Array(length).fill(value);
// }

// console.log(fillArr(10,'a'))



// object - через функции ачылышы

// function createObject(id,age,name){
//     return {
//         id: id,
//         age: age,
//         name : name
//     }
// }

// console.log(createObject( 23, 16, 'Alina' ))


// let obj1 = {
//     id: 1,
//     age: 16 ,
//     name : 'Alina'
// }

// let obg2 = {
//     id: 2 ,
//     age: 17,
//     name : 'Asnova'
// }
// let newObject = {...obj1 , ...obg2}
// console.log( newObject ) // окшошторду бир кылып окшош эместерди озуночо жазып чыгарат акыркы обькке карата тууралай.


// Object.assign()
 
// let obj1 = {
//     id: 1,
//     age: 16 ,
//     name : 'Alina'
// }

// let obg2 = {
//     id: 2 ,
//     age: 17,
//     name : 'Asnova'
// }
// let obg3 = {
//     id: 4 ,
//     age: 45,
//     name : 'Amanov'
// }

// let newObject = Object.assign({},obj1, obg2,obg3) // 1-чи параметери - 'target' тооясть 1чисине карап туруп тууралайт
// console.log('jbg2- ',obg2) // озу боюнча калды
// console.log('jbg1- ',obj1) // 3ту туурап чыгарды
// console.log('jbg3- ',obg3) // obj3
// console.log(newObject)









// ========= key,value in object ========
// let obg3 = {
//     id: 4 ,
//     age: 45,
//     name : 'Amanov'
// }

// console.log(Object.keys(obg3)) 
// console.log(Object.values(obg3))






/////////  ============= задачи ============

// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(Object.keys(obj).length)

// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c' двумя способами:
//  через квадратные скобки и как свойство объекта.
// let obj = {
//     a: 1,
//     b: 2,
//     'c': 3
// }
// console.log(obj.c)
// console.log(obj['c'])

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
// let obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// console.log(Object.values(obj)[0])
// console.log(Object.values(obj)[2])



// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.
// let obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// obj.Атай = 500
// console.log(obj)

// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Добавьте к объекту ключ Медет со значением 1500.
// let obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// obj.Медет = 1500
// console.log(obj)

// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите значение ключа salary в консоль.
// let obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(Object.values(obj.Атай))

// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.).
// //  Выведите на экран текущий день недели.
// let week = {
//     monday : 'first',
//     tuesday : 'second',
//     wednesday : 'third',
//     thursday : 'fourth',
//     friday : 'fifth',
//     saturday : 'sixth',
//     sanday : 'seventh'
// }
// console.log(week.saturday)


// // 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. 
// // Выведите день недели, соответствующий значению переменной day.
// let day = 3
// function dayWeek(){
//     if (day === 1){
//         return {
//             monday : 'first'
//         }
//     }else if (day === 2){
//         return{
//             tuesday : 'second' 
//         }
//     }else if (day === 3){
//         return{
//             wednesday : 'third' 
//          }  
//     }else if (day === 4){
//         return{
//             thursday : 'fourth' 
//         }     
//     }else if (day === 5){
//         return{
//             thursday : 'fourth' 
//         }  
//     }else if (day === 6){
//         return{
//             saturday : 'sixth' 
//         } 
//     }else if (day === 7){
//         return{
//             sanday : 'seventh'
//         } 
//     } 
// }
// console.log(dayWeek(day))


// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все ключи объекта.
// obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// for (let key in obj){
//     console.log(key)
// }



// 10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все значения объекта.
// obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(Object.values(obj))



// for (let values in obj){
//     console.log(values)
// }


// 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите все entries объекта.
// obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(Object.entries(obj))

// 12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.
// let obj = {
//     name: 'Igor'
// }
// function lenghtObj(){
//     if (Object.keys(obj)[0].length % 2 === 0){
//         return 0
//     }else {
//         return 1
//     }
// }
// console.log(lenghtObj(obj))

// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . Выведите все id в консоль через map.
// function arr (arr){
//     return arr.map((el,index)=>{
//         return Object.keys(el)
//     })
// }
// console.log(arr([ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] ))




// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением 25. Поменяйте значение name на Azat.
// let object =  {name: 'Igor'}
// function obj(){
//     object.age = 25
//     object.name = 'Azat'
//     return object
// }
// console.log(obj(object))



// 15. Вам дан объект product = {
// name: "headphones",
// price: 100,
// discount: 0
// }. Найдите стоимость объекта с ценой, и если она больше 100, снизьте ее на 10%. Если это не так, сделайте скидку на 7%. Обновите объект.

// product = {
//     name: "headphones",
//     price: 42,
//     discount: 0
//     }
// function price(){
//    if (product.price >= 100){
//     return product.price- product.price / 10
//    }else {
//         return product.price - product.price / 7
//    }
// }
// console.log(price(product))








////////////////////////////////////////////////////////

// function getsum (a,b){
//     return [a[0] + b[0], a[1] + b[1]]
// }
// console.log(getsum([2,4],[4,7]))




// function get (arr){
//     return arr.map((el)=>{
//         return el * 2
//     })
// }
// console.log(get([1,2,3,4,5]))

// Task 3 -----
// Напишите функцию, которая принимает массив объектов с полем id. Например [[{id: '100'}, {id: 2}]] и возвращает массив этих id
// Input: [{id: 1},{id: 2},{id: 3},{id: 4}]
// Output: [1,2,3,4]
// Input: [{id: true}]
// Output: [true]
// function getid ( arr){
//     return arr.map((el,index)=>{
//         return el.map((el)=>{
//             return el.id
//         })
//     })
// }
// console.log(getid( [[{id: '100'}, {id: 2}]]))



// Task 4
// Напишите функцию, которая принимает массив чисел и возвращает массив строк по шаблону <h1>{number}</h1>
// Input: [1,2]
// Output: ['<h1>1</h1>','<h1>2</h1>']

// Input: ['Ivan']
// Output: ['<h1>Ivan</h1>']

// function str (arr){
//     return arr.map((el)=>{
//         return [`<h1>${el}</h1>`]
//     })
    
// }
// console.log(str([1,5]))



// Task 5
// Напишите функцию, которая принимает массив строк и возвращает массив строк с четным количеством букв
// Input: ['ab','abc','abcd']
// Output: ['ab','abcd']
// Input: ['abc','abcde']
// Output: []
// function evenNumbers(arr){
//     return arr.map((el)=>{
//         if (el.length % 2 === 0){
//             return el
//         }else{
//             return []        }
//     })
// }
// console.log(evenNumbers( ['abks','abc','abcd']))

// Task 6
// Напишите функцию, которая принимает массив чисел и возвращает массив чисел умноженных на два, которые делятся на 10 без остатка
// Input: [1,2,3,7,10,5]
// Output: [20,10]

// Input: [1,2,3,7,9,4]
// Output: []
// function division (arr){
//     return arr.map((el)=>{
//         return el * 2
//     }).filter((el)=>{
//         return el % 10 === 0
//     })
// }
// console.log(division([1,2,3,7,2,5]))


// Task 7
// Напишите функцию, которая принимает массив булевых значений и возвращает массив только со значениями true
// Input: [true,false,true,true]
// Output: [true,true,true]

// Input: [false,true]
// Output: [true]
// function boolean(arr){
//     return arr.map((el)=>{
//         if ( el === true){
//             return el
//         }else {
//             return []
//         }
//     })
// }
// console.log(boolean([true,false,true,true]))

// Task 8
// Напишите функцию, которая принимает массив значений в т.ч и значения undefined и возвращает массив только без значений undefined
// Input: [true, false, true,true, undefined, true, undefined]
// Output: [true, false, true, true, true]

// Input: [undefined, true, undefined]
// Output: [true]
// function undefinedo(arr){
//     return arr.filter((el)=>{
//         if (el !== 'undefined'){
//             return el
//         }
//     })
// }
// console.log(undefinedo([ undefined,undefined,true,false]))

// Task 9
// Напишите функцию, которая принимает массив чисел и возвращает их сумму. Использовать reduce
// Input: [1,2,3,4,5]
// Output: 15

// Input: [2, 11, 5]
// Output: 18
// function sum(arr){
//     return arr.reduce((acc,el)=>{
//         return acc + el
//     })
// }
// console.log(sum([1,2,3,4,5]))


// Task 10
// Напишите функцию, которая принимает массив булевых значений и возвращает результат логического И над ними. Использовать reduce
// Логическое И - это операция &&
// Input: [true,true,true,true]
// Output: true

// Input: [true,false,true]
// Output: false

// function boolean (arr){
//     return arr.reduce((acc,el)=>{
//             return acc && el 
//     })
// }
// console.log(boolean( [true,false,true]))


// Task 11
// Напишите функцию, которая принимает массив чего угодно и возвращает объект с полями {field1, field2, field3, field4}. Использовать reduce. 
// Готовим баночки и не отчаиваемся. Будет 🔥
// Input: [true,1,'wow','you are smart, bro']
// Output: {field1: true, field2:1, field3: 'wow', field4: 'you are smart, bro'}

// function getObj(arr){
//     let finalObj = {};
  
//     for(let i = 0; i< arr.length; i++){
//       finalObj[`field${i + 1}`] = arr[i]
//     };
  
//     console.log(finalObj);
//   }
  
//   console.log(getObj([true,1,'wow','you are smart, bro']))

// function createObject(field1, field2, field3, field4){
//     return {
//        field1 : field1,
//        field2 : field2,
//        field3 : field3,
//        field4 : field4
//     }
// }

// console.log(createObject( true,1,'wow','you are smart, bro'))




// Task 12 ------
// Напишите функцию, которая принимает объект, как аргумент и возвращает новый объект. Только с полями, у которых тип значения - строка;
// Input: { name: 'Baha', isAdmin: true }
// Actions:
// Output: { name: 'Baha' }

// Input: { isAdmin: true }
// Actions:
// Output: {}

  



//   function onlyString(obj){
//     let finalObj = {};
  
//     for(let key in obj){
//       if( typeof obj[key] === 'string'){
//         finalObj[key] = obj[key]
//       }
//     };
  
//     console.log(finalObj);
//   }
// console.log(onlyString({ name: 'Baha', isAdmin: true, surname: 'Asanova' }))


// function sort (a,b){

//     if (){
      
//     }
// }
// console.log(sort('A','l'))

// let array = []
// for (let item = 0;item < 20;  item += 2) {
//    array.push(item)
    
// }
// console.log(array)

// let array = []
// for (let item = 30;item > 0;  item -= 3) {
//    array.push(item)
    
// }
// console.log(array)



// function pickIt (arr){
//     let even = []
//     let odd = []
//     for (let i = 0; i < arr.length; i+= 2){
//         //  if (arr[i] % 2 === 0 ){
//         //     return arr[i]
//         //  }
//         console.log(even.push(arr[i]))
//     }
//     for (let i = 0; i < arr.length; i+= 3){
//         //  if (arr[i] % 2 === 0 ){
//         //     return arr[i]
//         //  }
//         console.log(odd.push(arr[i]))
//     }
//     return [odd,even]
// }
// console.log(pickIt([1,4,5,6,7,8,9]))





// Task 12 ------
// Напишите функцию, которая принимает объект, как аргумент и возвращает новый объект. Только с полями, у которых тип значения - строка;
// Input: { name: 'Baha', isAdmin: true }
// Actions:
// Output: { name: 'Baha' }

// Input: { isAdmin: true }
// Actions:
// Output: {}


// function getString(obj){
//     let finalObj = {}
//     for( let key in obj){
//         if (typeof obj[key]==='string' ){
//            finalObj[key] = obj[key] 
//         }
//     }
//     console.log(finalObj) 
// }
// console.log(getString({ name: 'Baha', isAdmin: true }))



// loop
// while
// do wile

// incriement ++
/* preincriment ++n, postincrement n++
 decrement--





 initalization - начало
 condition - условие
 post expression - шаг

*/
////////////////////////////////////////////
// let n = 0;
// for(let i = 0; i< 10; i++){
//     console.log(i)
//     i++
// }
// console.log(n)


// let result = 0;
// for(let i = 0; i <=100; i++){
//     result = result + i
// }

// for( let i = 1; i < 10; i++){
//     for(let t = 0; t <10; t++){
//         console.log(`${i} X ${t} = ${t * i}`)
//     }

// }



//////////////////
// // 1. Выведите столбец чисел от 1 до 50.
// for( let i = 1; i <= 50; i++){
//     console.log(i)
// }


// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.
// let arr = new Array()
// for(let i = 1; i <= 10; i++){
//     arr.push('x')
    
// }
// console.log(arr)


// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.
// let arr = [5, 3, 1, 2, 7];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.
// let result = 1
// let arr = [5, 2, 1, 2];
// for(let i = 0; i < arr.length; i++){ 
//   result *= arr[i]
// }
// console.log(result)

// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// for(let i = 0; i< 100; i++){
//    if(i % 2 === 0){
//       console.log(i)
//    }
// }


// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let result = 1
// for(let i = 1; i < 100; i++){
//    result += i
// }
// console.log(result)

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму элементов этого массива.
//  Запишите ее в переменную result.
// let arr = [2, 4, 5, 6, 8]
// let result = 0
// for(let i = 0; i < arr.length; i++){

// }
// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if выведите на экран столбец
//  тех элементов массива, которые больше 3-х, но меньше 10.
// let arr = [3, 4, 6, 12, 3];
// for(let i = 0; i< arr.length; i++){
//    if (arr[i] > 3 && arr[i] < 10 ){
//       console.log(arr[i])
//    }
// }

// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными.
//  Найдите сумму положительных элементов массива.
// let arr = [9,9,9,0,6,0,9,6,3,-15,-15,-5]
// let result = 0
// for(let i = 0; i < arr.length; i++){
//    if (arr[i] > 0){
//       result += arr[i] 
//    }
// }
//  console.log(result)


// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора
//  if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' 
// и выйдите из цикла. Если нет - ничего делать не надо.
// let arr = [5, 1, 3, 7, 6, 15, 3, 20, 4];
// for(let i = 0; i < arr.length; i++){
//    if (arr[i] === 4){
//       console.log('Have!')
//    }
// }


// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран только те числа из массива,
//  которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 40, 135, 2000];
  
// for ( let i = 0; i <= arr.length; i++){
//    let number = String(arr[i])

//  if(number[0] == 1 || number[0] == 2 || number[0] == 5 ){
//    console.log(number)
//    // console.log(result)
//  }
// // console.log(arr[i])
// }



// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.join('-')
// let str = ['-']
// for(let i = 0; i < arr.length; i++){
//    str.push(arr[i] + '-')
// }
// console.log(arr)


// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. 
// Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла),
//  и запишите его в переменную num.
// let n = 1000;
//  let num = 0
// do{
//    n = n / 2 
//    num++
// }while(n >= 50)
 
//  console.log(n)
//  console.log(num)

// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его элементов (сумма элементов,
//  делить на количество).
// let arr = [1, 2, 3, 7, 9,8,8];
// let result = 0
// for (let i = 0; i < arr.length; i++){
//    result += arr[i] 
// }
// console.log(result / arr.length)



// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива.
// let arr = [1, 2, 3, 4, 5];
// result = 0;
// for(let i = 0; i < arr.length; i++){
//    result += arr[i] ** 2 
// }
//  console.log(result)



// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]. С помощью цикла выведите только те 
// элементы массива, которые больше нуля и меньше 10-ти.
// let arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// for(let i = 0; i< arr.length; i++){
//    if(arr[i]>0 && arr[i] < 10){
//       console.log(arr[i])
//    }
// }

// 17. Создайте переменную с пустым массивом, заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
// let arr = new Array()

// for(let i = 1; i <  10; i++){
//    arr.push(Math.random() * 10)
// }
// console.log(arr)



// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.
//  let result = 0
// for( let i = 0; i <= 1000; i++){
//    if( i % 3 === 0 && i % 5 === 0){
//      result += i
//    }
   
// }
// console.log(result)

// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].Создайте цикл,
//  который выводит нечетные числа, которые больше 10.

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
// for(let i = 0; i <= arr.length; i+=1){
//    if( arr[i] > 10 && arr[i] % 2 !== 0){
//       console.log(arr[i])
//    }
// }


// 20. Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.



// let str = 'jzvzszrzpz';
// result = ' '
// for ( let i = 0; i < str.length; i++){
//    if ( i % 2 === 0){
//       result += str[i].toUpperCase()
//    }else{
//      result += str[i].toLowerCase()
//    }
  
// }
//  console.log(result)



/* 
///////////////// палиндром 

function palindromeChecker(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    const lastIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex - i]) {
            return false;
        }
    }
    return true;
}*/



// =========== recursion, carrying ==============
//   let n = 0;
//   function sum (){
//     n++
//     if (n < 10){
//         return sum()
//     }else{
//         return n
//     }
//   }
// console.log(sum())



// 10! = 1 * 2 * 3 ... 9 * 10
// function factorial (n){
//     if ( n=== 1 || n === 0){
//         return 1
//     }
//     return n * factorial( n - 1)
// }
// console.log(factorial(10))


// function func (n){
//     let sum = n.toString().split('').reduce((acc,el)=>{
//         return acc + el
//     },0)
//     return sum >= 10 ? func(sum) : sum
// }

// function closesure(n){
//     let b = 20
//     return function(){
//         return n + 5 + b
//     }
// }
// console.log(closesure(10)())






//carrying
// let i = 10;
// function d(){
//     return i + 5
// }
// i = 5
// console.log(d()())



// function factorial (n){
//     if ( n === 1 || n=== 0){
//         return 1
//     }
//     return n * factorial( n - 1)
// }
// console.log(factorial(10))



// function func(n){
//      let sum = String(n).split('').reduce((acc,el)=>{
//         return acc + +el
//     },0)
//    return sum >= 10 ? func(sum) : sum  // ternar operator

// }

// console.log(func(84293875928365))



// function closure(n){
//     let b = 8;
//     return function(k){
//        return  n + 6 + b - k
//     }
// }

// console.log(closure(3)(6))

// function func(domain){
//     return (name)=>{
//        return  `https://${name}.${domain}`
//     }
// }

// let web = func('com')
// let webKg = func('kg')
// console.log(web('netflix'))
// console.log(webKg('lalafo'))


// =========== this =========



// function greeting (){
//     return `hello ${this}`
// }
// console.log(greeting())


// let obj = {
//     name: 'Alina',
//     birthDay : 2005,
//     getInfo:function(){
//         console.log(`${this.age} years old`)
//         return `This person is ${this.name}`
//     },
//     age : function (){
//         return new Date().getFullYear()- this.birthDay
//     },
//     getObj : function (name,age, car){
//         return `my name is ${name}, I am ${age} years old , and My car is ${car}`
//     }

// }


// blind
// call 
// apply

// console.log(obj.getInfo())

// const person = {
//     x: 42,
//     birthDay: 1982,
//     getX : function(){
//         return this.x
//     }

// }





// Создайте функцию, которая принимает 2 строковых аргумента и возвращает целое число,
//  соответствующее количеству вхождений второго аргумента в первом.
// Если вхождений не найдено, должно быть возвращено число 0.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0


// function getNum (str,letter){
//     strArr = str.split('')
//    let count = 0
//     for (let i = 0; i <= strArr.length; i++){  
//         if (str[i] == letter){
//             count++
//         }
//     }
//     return count
// }
// console.log(getNum('Alina','i'))




// Ваша задача очень проста. Просто напишите, функция принимает 
// входную строку строчных букв и возвращает true/false в зависимости 
// от того, находится ли строка в алфавитном порядке или нет.

// Примеры (ввод -> вывод)
// «ката» -> ложь («а» идет после «к»)
// "ant" -> true (все символы в алфавитном порядке)

// function Boolean(str){
//     let strArr = str.split('').sort()
//     let result = strArr.join('')
  
//     return result === str ? true : false
// }
// console.log(Boolean(''))





// У всех животных праздник! Каждое животное приносит одно блюдо. 
// Есть только одно правило: блюдо должно начинаться и заканчиваться 
// теми же буквами, что и имя животного. Например, большая голубая цапля 
// приносит чесночный наан, а синица приносит шоколадный торт.

// Напишите функцию feast, которая принимает имя животного и блюдо в 
// качестве аргументов и возвращает true или false, чтобы указать,
//  разрешено ли животному приносить блюдо на пир.

// Предположим, что зверь и блюдо всегда являются строками 
// нижнего регистра и каждая из них состоит как минимум из двух букв. 
// зверь и блюдо могут содержать дефисы и пробелы, 
// но они не будут появляться ни в начале, ни в конце строки.
//  Они не будут содержать цифр

// function feast(animaL,dish){
//     if (animaL[0] === dish[0] && animaL[animaL.length-1] === dish[dish.length-1]){
//         return true
//     }else{
//         return false
//     } 
//     
// }
// console.log(feast('great blue heron','garlic naan'))
// console.log(feast('chic-ken','caken'))






// Рассмотрим массив/список овец,где некоторые овцы могут отсутствовать
//  на своем месте. Нам нужна функция, которая подсчитывает количество овец,
//   присутствующих в массиве (true означает наличие).
//    Правильный ответ будет 17.

// Подсказка: не забудьте проверить наличие неверных значений, 
// таких как null/undefined

//     function countSheep(quantity){
//     let result = 0;
//         for(let i = 0; i < quantity.length; i++){
//             if(quantity[i] === true){
//                 result += quantity[i]
//             }
//     }
//      console.log(result)
// }
//     console.log(countSheep([true,  true,  true,  false,
//         true,  true,  true,  true ,
//         true,  false, true,  false,
//         true,  false, false, true ,
//         true,  true,  true,  true ,
//         false, false, true,  true]))




// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

// function getSum(num){
//     let result = 0;
//     for (let i = 1; i <= num; i++){
//         result += i
//     }
//     console.log(result)
// }
// console.log(getSum(2))




// Вам даны длина и ширина четырехугольника.
//  Многоугольник может быть прямоугольным или квадратным.
// Если это квадрат, вернуть его площадь. Если это прямоугольник, 
// верните его периметр.

// function figure(length,width){
//     let result 
//     if(length === width){
//         result = length ** 2
//     }else{
//         result = (length + width) * 2
//     }
//     return result
// }
// console.log(figure(9,8))
// console.log(figure(8,8))





// class Person {
//     constructor (userName,age,isMarried){
//         this.userName = userName;
//         this.age = age;
//         this.isMarried = isMarried
//     }
//     sayHi(name) {
//         console.log(`hi, ${name}! my name is ${this.userName}`)
//     }
// }
// const person1 = new Person('Mark',30,false)





































//  ================= DOM - ELEMENT ==============

// DOM - documnent object model - > обьектная модель документа
// BOM - browser object model

// BOM
// alert('hello World')
// const conf = confirm('do you learn js')
// const el = prompt ('what is your name')


//  DOM
//  document
// const h1 = document.getElementsByTagName('h1') // коллекцияны алып чыгарат
// const h1 = document.getElementById('h1')
// const 


const boxes = document.querySelectorAll('.box')


boxes.forEach((el,idx) =>{
    el.addEventListener('click',()=>{
        boxes.forEach(el =>{
            el.style.background = ''
        })
        if ( idx === boxes.length - 1){
            return idx = -1
        }
        
        boxes[idx + 1].style.background = 'green'
    })
})

