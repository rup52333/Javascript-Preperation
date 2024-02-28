
const username=document.getElementById("username")
const email=document.getElementById("email")
const password=document.getElementById("password")
const btn=document.getElementById("btn")
const errormsg=document.querySelectorAll(".error")
const errorIcon=document.querySelectorAll(".failure-icon")
const successIcon=document.querySelectorAll(".success-icon");
console.log(successIcon);
const message=["Please fill username","Please fill email","Please fill password"]
let engine=(id,serial)=>{
    console.log(id.value);
    if(id.value.trim()==""){
        errorIcon[serial].style.opacity="1"
        errormsg[serial].innerHTML=message[serial];
        id.style.border="2px solid red";
        }
        else{
            errormsg[serial].innerHTML="";
            errorIcon[serial].style.opacity="0"
            id.style.border="2px solid green";
        }


}



const form=document.getElementById("form");

form.addEventListener("submit",(e)=>{
e.preventDefault();

engine(username,0)
engine(email,1)
engine(password,2)
if(username.value.trim()!=="" && password.value.trim()!=="" && email.value!==""){
    var userData = [
        { username:`${username.value}`, email: `${email.value}`, password:`${password.value}` },
    ];
    
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = 'data.html';

}

})





















