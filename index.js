var email=document.getElementById("email");
var submit= document.getElementById("button");
var myError= document.getElementById("errorMsg");
var errIcon =document.getElementById("errorIcon")

email.addEventListener('input', function(e){
    emailAddress=e.target.value
})


submit.addEventListener('click', function(){
    //if email is a valid one, the invalid icon stays hidden else the invalid icon shows
    if (emailAddress.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        console.log("Email valid")
        myError.style.display="none";
        errIcon.style.display="none";
        email.style.border="solid 1px hsl(0, 6%, 24%)"
    } else{
        console.log("Email invalid")
        email.style.border="solid 1px hsl(0, 100%, 74%)"
        myError.style.display="unset";
        errIcon.style.display="unset";
    }
})