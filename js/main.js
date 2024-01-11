var sign=document.getElementById('sign')
var signIn=document.getElementById("signIn")
var signUp=document.getElementById("signUp")
var signUpForm=document.getElementById('signUpForm')
var loginForm=document.getElementById('loginForm')
var signUpName=document.getElementById('signUpName')
var signUpEmail=document.getElementById('signUpEmail')
var signUpPass=document.getElementById('signUpPassword')
var loginEmail=document.getElementById('userEmail')
var loginPass=document.getElementById('userPassword')
var success=document.getElementById('success')
var error=document.getElementById('error')
var exist=document.getElementById('exist')
var home=document.getElementById('home')
var userName
var usersList=[]
if(localStorage.getItem("userlist")!=null){
    usersList=JSON.parse(localStorage.getItem("userlist"))
}
function addUser(){
    if(validName()==true && validSignUpEmail()==true && validSignPass()==true){
        if(isExist()==true){
            document.getElementById("exist").innerHTML="Email is exist"
        }else{
            var user={
                name:signUpName.value,
                email:signUpEmail.value,
                pass:signUpPass.value
            }
            usersList.push(user)
            localStorage.setItem("userlist",JSON.stringify(usersList))
            successMessage()
            clear()
        }
    }else{
        errorMessage()
    }
}
function isExist(){
    for (let i = 0; i < usersList.length; i++) {
        if(usersList[i].email.toLowerCase()==signUpEmail.value.toLowerCase()){
            return true
        }
    }
}
function clear(){
    signUpName.value=''
    signUpEmail.value=''
    signUpPass.value=''
    signUpName.classList.remove('is-valid')
    signUpEmail.classList.remove('is-valid')
    signUpPass.classList.remove('is-valid')
    loginEmail.value=''
    loginPass.value=''
    loginEmail.classList.remove('is-valid')
    loginPass.classList.remove('is-valid')
}
function successMessage(){
    success.classList.remove('d-none')
    error.classList.add('d-none')
    exist.classList.add('d-none')
    document.getElementById("success").innerHTML="Success"
}
function errorMessage(){
    error.classList.remove('d-none')
    success.classList.add('d-none')
    document.getElementById("error").innerHTML="All inputs is required and all inputs must valid "
}
signIn.addEventListener('click',()=>{
    signUpForm.classList.add('d-none')
    loginForm.classList.remove('d-none')
})
signUp.addEventListener('click',()=>{
    signUpForm.classList.remove('d-none')
    loginForm.classList.add('d-none')
})
function successLogin(){
    for (let i = 0; i < usersList.length; i++) {
        if(usersList[i].email.toLowerCase()==loginEmail.value.toLowerCase() && usersList[i].pass==loginPass.value){
            userName=usersList[i].name
            return true
        }
        
    }
}
function login(){
    if(validLoginEmail()==true && validLoginPass()==true){
        if(successLogin()==true){
            home.classList.remove('d-none')
            sign.classList.add('d-none')
            document.getElementById('message').innerHTML="Welcome "+userName
            clear()
        }else{
            document.getElementById("notExist").innerHTML="Email isn't exist"
        }
    }
}
function logOut(){
    home.classList.add('d-none')
    sign.classList.remove('d-none')
    signUpForm.classList.add('d-none')
    loginForm.classList.remove('d-none')
}
///////////////////////////////////////////////////////validation///////////////////////////////////////////////////
signUpName.addEventListener('change',validName)
function validName(){
    var ragName=/^[A-Z][a-z]{3,20}$/
    if(ragName.test(signUpName.value)==true){
        signUpName.classList.add('is-valid')
        signUpName.classList.remove('is-invalid')
        return true
    }else{
        signUpName.classList.add('is-invalid')
        signUpName.classList.remove('is-valid')
        return false
    }
}
signUpEmail.addEventListener('change',validSignUpEmail)
function validSignUpEmail(){
    var ragEmail=/\w+@\w+\.\w+/ig
    if(ragEmail.test(signUpEmail.value)==true){
        signUpEmail.classList.add('is-valid')
        signUpEmail.classList.remove('is-invalid')
        return true
    }else{
        signUpEmail.classList.add('is-invalid')
        signUpEmail.classList.remove('is-valid')
        return false
    }
}
loginEmail.addEventListener('change',validLoginEmail)
function validLoginEmail(){
    var ragEmail=/\w+@\w+\.\w+/ig
    if(ragEmail.test(loginEmail.value)==true){
        loginEmail.classList.add('is-valid')
        loginEmail.classList.remove('is-invalid')
        return true
    }else{
        loginEmail.classList.add('is-invalid')
        loginEmail.classList.remove('is-valid')
        return false
    }
}
signUpPass.addEventListener('change',validSignPass)
function validSignPass(){
    var ragPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(ragPass.test(signUpPass.value)==true){
        signUpPass.classList.add('is-valid')
        signUpPass.classList.remove('is-invalid')
        return true
    }else{
        signUpPass.classList.add('is-invalid')
        signUpPass.classList.remove('is-valid')
        return false
    }
}
loginPass.addEventListener('change',validLoginPass)
function validLoginPass(){
    var ragPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(ragPass.test(loginPass.value)==true){
        loginPass.classList.add('is-valid')
        loginPass.classList.remove('is-invalid')
        return true
    }else{
        loginPass.classList.add('is-invalid')
        loginPass.classList.remove('is-valid')
        return false
    }
}
