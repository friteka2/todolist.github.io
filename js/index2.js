let emailInput = document.getElementById("emailInput")
let passInput = document.getElementById("passInput")

function register(){
    if (passInput.value === ""||emailInput.value === ""){
        alert("Поля не могут быть пустыми")
    }
}