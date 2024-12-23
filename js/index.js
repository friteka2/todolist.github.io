// let a = 1000
// if (a > 5){
//     console.log("Больше 5")
// }
// else if (a == 5){
//     console.log("Меньше 5")
// }
// else{
//     console.log("Меньше 5")
// }

// let sum = 0
// for (let i = 0; i < 10; i+= 2){
//     sum += i
// }
// console.log(sum)

// let i = 0
// while(i< 10){
//     console.log(i)
//     i++
// }

let emailInput = document.getElementById("emailInput")
let passInput = document.getElementById("passInput")
let conInput = document.getElementById("conInput")
function register(){
    if (passInput.value === ""||emailInput.value === "" || conInput.value === ""){
        alert("Поля не могут быть пустыми")
        return
    }
    if (passInput.value === conInput.value){
        console.log(emailInput.value)
        console.log(passInput.value)
        console.log(conInput.value)     
    }
    else{
        alert("Пароли не совпадают")
    }       
}   

