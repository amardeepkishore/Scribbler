//getdata function load the content when post page is load by  get the value from session storage
var count = 0;
getPostDetail();
function getPostDetail(){
    var title = sessionStorage.getItem("title");
    var content = sessionStorage.getItem("content");    
    var username = sessionStorage.getItem("username");    
    document.getElementById('titlecontent').innerHTML = title;
    document.getElementById('contentparagraph').innerHTML = content;
    document.getElementById('txtusername').innerHTML = username;    
}

// AddLike function use to likes and increment count 
function AddLike(){
    count++;
    if(count == 1)
    {
        document.getElementById('likedstatus').innerHTML = count + ' Person likes this !';
    }
    if(count > 1)
    {
        document.getElementById('likedstatus').innerHTML = count + ' Persons liked this !';
    }
    document.getElementById('btnLiked').innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked';
}

// AddComment add comment use to add comment section
function AddComment(){
    var commenttext = document.getElementById("commentbox").value;
    if(commenttext == ''){
        alert("Please add Comment");
        document.getElementById("commentbox").focus();
    }
    else {
        var Liobj = document.createElement("LI");
        var commentobj = document.createTextNode(commenttext);
        Liobj.appendChild(commentobj);
        document.getElementById("commentsList").prepend(Liobj);
        document.getElementById("commentbox").value = '';
    }
}

// Edit post this below function use to Edit title and Content 
function EditPost(){

    var buttonvalue = document.getElementById('btnEdit').value;
    if(buttonvalue == 'Edit')
    {
        //below code use to edit Title
        //Start Edit Title
        var commenttext = document.getElementById("titlecontent").innerHTML;
        document.getElementById('titlecontent').style.display = 'none';
        var x = document.createElement("INPUT");
        x.setAttribute("id", "txtedittitle");
        x.setAttribute("type", "text");
        x.setAttribute("value", commenttext);
        x.setAttribute('size', '150');
        x.style.borderColor = "red";
        document.getElementById("titledit").appendChild(x);
        //End Edit Title

        //Start Edit Cotents
        var contenttext = document.getElementById("contentparagraph").innerHTML;
        document.getElementById('contentparagraph').style.display = 'none';
        var x = document.createElement("TEXTAREA");
        x.setAttribute("id", "txtcontentarea");
        x.setAttribute("type", "text");
        x.setAttribute("rows",10);
        x.setAttribute("cols",250);
        x.style.borderColor = "red";
        var t = document.createTextNode(contenttext);
        x.appendChild(t);
        document.body.appendChild(x);
        
        
        document.getElementById("contentedit").appendChild(x);
        //End Edit Content



        document.getElementById('btnEdit').innerHTML = 'SAVE <i class="fa fa-pencil-square-o" aria-hidden="true">';
        document.getElementById('btnEdit').value = 'SAVE';
    }
    else if(buttonvalue == 'SAVE'){
        //start validaton
        var txtedittitleobj = document.getElementById("txtedittitle");
        var txtcontentareaobj = document.getElementById("txtcontentarea");
        if(txtedittitleobj.value == ""){
            alert("Please add title here.");
            document.getElementById("txtedittitle").focus();
        }
        else if(txtcontentareaobj.value == ""){
            alert("Please add content here.");
            document.getElementById("txtcontentarea").focus();
        }        
        else{
             //Set button Edit
        document.getElementById('btnEdit').innerHTML = 'EDIT <i class="fa fa-pencil-square-o" aria-hidden="true">';
        document.getElementById('btnEdit').value = 'Edit';
        //End button value


        //Start Title        
        document.getElementById("titlecontent").innerHTML = document.getElementById("txtedittitle").value;
        document.getElementById('titlecontent').style.display = 'block';
        //End Title

        document.getElementById("contentparagraph").innerHTML = document.getElementById("txtcontentarea").value;
        document.getElementById('contentparagraph').style.display = 'block';

        //Remove objs
        var myobj = document.getElementById("txtedittitle");
        myobj.remove();
        var txtcontentareaobj = document.getElementById("txtcontentarea");
        txtcontentareaobj.remove();        
        //End objs
        }               
    }
    
}