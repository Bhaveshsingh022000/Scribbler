var mod = document.getElementById("signUpModal");
    var bt = document.getElementById("signUp");
    var sp = document.getElementsByClassName("close")[0];
bt.onclick = function(){
    mod.style.display = "block";
}
sp.onclick = function(){
    mod.style.display = "none";
}
window.onclick = function(event){
    if(event.target == "none"){
        mod.style.display = "none";
    }
}