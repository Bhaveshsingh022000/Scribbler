var del = document.getElementById("trash");
var yes = document.getElementById("yes");
var no = document.getElementById("no");
var modal = document.getElementById("deleteModal");

del.onclick = function(){
    modal.style.display = "block";
}
yes.onclick = function(){
    modal.style.display = "none";
}
no.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}