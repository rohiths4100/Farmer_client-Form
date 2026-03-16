const form = document.getElementById("loginForm")
const username = document.getElementById("username")
const password = document.getElementById("password")
const error = document.getElementById("error")
const showPassword = document.getElementById("showPassword")

showPassword.addEventListener("change", function(){

if(this.checked){
password.type="text"
}
else{
password.type="password"
}

})

form.addEventListener("submit", function(e){

e.preventDefault()

if(username.value.trim()=="" || password.value.trim()==""){
error.innerText="Please fill all fields"
return
}

if(password.value.length<6){
error.innerText="Password must be at least 6 characters"
return
}

error.innerText=""

alert("Login successful (Demo)")

window.location.href="../index.html"

})