const form = document.getElementById("signupForm")

const pass = document.getElementById("pass")
const confirm = document.getElementById("confirm")
const strength = document.getElementById("strength")
const error = document.getElementById("error")

pass.addEventListener("input", function(){

let p = pass.value

if(p.length<6){
strength.innerText="Weak password"
strength.style.color="red"
}

else if(p.length<10){
strength.innerText="Medium password"
strength.style.color="orange"
}

else{
strength.innerText="Strong password"
strength.style.color="green"
}

})

form.addEventListener("submit", function(e){

e.preventDefault()

if(pass.value!==confirm.value){
error.innerText="Passwords do not match"
return
}

error.innerText=""

alert("Account created successfully")

window.location.href="login.html"

})