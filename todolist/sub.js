let inputbox = document.getElementById("input-box");
let listcontainer = document.getElementById("tasks");
 


function add(){

    if(inputbox.value === '')
    {
        alert("You must add task")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputbox.value ='';
    save();
}

 
listcontainer.addEventListener("click",

function(e){

    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("a");
        save();
    }
    else if(e.target.tagName === "SPAN")
    {
      e.target.parentElement.remove();
      save();
    }
},false);

function save(){
    localStorage.setItem("data",tasks.innerHTML);
}
 
function show(){
    tasks.innerHTML =  localStorage.getItem("data");
}

show();

 

