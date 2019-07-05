var signIn = document.getElementById("signIn");
var mod1 = document.getElementById("signInModal");
var close1 = document.getElementsByClassName("close1")[0];
signIn.onclick = function(){
    mod1.style.display = "block";
}
close1.onclick = function(){
    mod1.style.display = "none";
}
window.onclick = function(event){
    if(event.target == mod1){
        mod1.style.display = "none";
    }
}

var signUp = document.getElementById("signUp");
var mod2 = document.getElementById("signUpModal");
var close2 = document.getElementsByClassName("close2")[0];
signUp.onclick = function(){
    mod2.style.display = "block";
}
close2.onclick = function(){
    mod2.style.display = "none";
}
window.onclick = function(event){
    if(event.target == mod2){
        mod2.style.display = "none";
    }
}

var sign = document.getElementById("member");
sign.onclick = function(){
    mod1.style.display = "none";
    mod2.style.display = "block";
}