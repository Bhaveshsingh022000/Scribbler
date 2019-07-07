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

var likeCount = 0;
var like = document.getElementById("likeButton");
like.onclick = function(){
    like.innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    likeCount = likeCount + 1;
    if(likeCount == 1){
        document.getElementById("likeText").innerHTML = "1 person Likes this!";
    }
    else{
        document.getElementById("likeText").innerHTML = likeCount + " people Liked this!";
    }
}


var commentBtn = document.getElementById("commentButton");
commentBtn.onclick = function(){
var com = document.createElement("p");
    com.setAttribute("id","allComment");
var tex = document.createTextNode(comment.value);
com.appendChild(tex);
document.getElementById("commentDisplay").appendChild(com);
}