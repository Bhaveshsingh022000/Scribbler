var post = document.getElementById("createPost");
var mod = document.getElementById("PostModal");
var close2 = document.getElementsByClassName("close2")[1];


post.onclick = function(){
    mod.style.display = "block";
}

close2.onclick = function(){
    mod.style.display = "none";
}

window.onclick = function(event){
    if(event.target == mod){
        mod.style.display = "none";
    }
}

var p = document.getElementById("modalPostButton");
p.onclick = function(){
    mod.style.display = "none";
}