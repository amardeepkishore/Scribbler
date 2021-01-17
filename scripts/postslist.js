// this(DeletePost) function use to delete post
//Get the hidden value that is set by setdeletepostid function
function DeletePost(){
    var postid = document.getElementById('hdnpost').value;
    var removepost = document.getElementById(postid);
    removepost.style.display = 'none'    
}


//use to set id of post that can be remove
function setdeletepostid(id){
    document.getElementById('hdnpost').value = id;
}


// showmore function use to redirect on post html page and load the content of postlist page 
function showmore(titleid,contentid,usernameid){
    var title = titleid.innerHTML;
    var content = contentid.innerHTML;
    var username = usernameid.innerHTML;
    sessionStorage.setItem("title",title);
    sessionStorage.setItem("content",content);
    sessionStorage.setItem("username",username);
    window.location.href = "post.html";
}