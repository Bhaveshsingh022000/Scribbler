var save = document.getElementById("saveButton");
var edit = document.getElementById("editButton");
var content = document.getElementById("blogBody");
edit.onclick = function(){
    edit.style.display = "none";
    save.style.display = "block";
    content.contentEditable = true;
    content.focus();
}

save.onclick = function(){
    save.style.display = "none";
    edit.style.display = "block";
    content.contentEditable = false;
    content.blur();
}
