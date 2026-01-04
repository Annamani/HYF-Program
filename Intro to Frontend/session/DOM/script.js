//GET ELEMENT
const getBtn = document.getElementById("getBtn");
getBtn.addEventListener("click", () => {
    const getEleById = document.getElementById("elementById");
    getEleById.style.backgroundColor = "grey";

    const getEleByClass = document.getElementsByClassName("elementByClass")
    for (let i = 0; i < getEleByClass.length; i++) {
        getEleByClass[i].style.fontStyle = "italic";
    }
});
//CREATE ELEMENT
const createBtn = document.getElementById("createEleBtn");
const createContainer = document.getElementById("createContainer");
createBtn.addEventListener("click", () => {
    const newParagraph1 = document.createElement("p");
    newParagraph1.textContent = "This paragraph is created from JS <b>check this output from textContent</b> ";
    newParagraph1.style.fontWeight = "bold";

    const newParagraph2 = document.createElement("p");
    newParagraph2.innerHTML = "This paragraph is created from JS <b>check this output from innerHTML</b> ";
    newParagraph2.style.fontWeight = "bold";

    createContainer.appendChild(newParagraph1);
    createContainer.appendChild(newParagraph2);
});
//INSERT ELEMENT
const insertBtn = document.getElementById("insertBtn");
const insertContainer = document.getElementById("insertContainer");
const itemList = document.getElementById("myList");

insertBtn.addEventListener("click", () => {
    const newlistItem = document.createElement("li");
    newlistItem.textContent = "Hot Chocolate";
    itemList.appendChild(newlistItem);
    //insertContainer.appendChild(newlistItem);

    const newItem = document.createElement("li");
    newItem.textContent = "Water";
    itemList.insertBefore(newItem, itemList.children[0]);
});