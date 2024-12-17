const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");

createBtn.addEventListener("click", ()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement('img');
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
});
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){       //Case Sensitivity: The tagName property should be checked in uppercase ("IMG")
        e.target.parentElement.remove();
    }
});