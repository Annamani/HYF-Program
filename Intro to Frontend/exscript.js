const newDiv = document.createElement("div");
newDiv.setAttribute("class", "myDivfromJS");
newDiv.innerHTML = "Hello, New div created from JS file";
document.body.appendChild(newDiv);

const btn = document.createElement("button");
btn.class = "myButtonfromJS";
btn.innerHTML = "Click Me";
newDiv.appendChild(btn);
btn.addEventListener("click", function () {
    console.log("Button clicked!");
});

const div = document.createElement("div");
div.innerHTML = "new div";
div.setAttribute("class", "events");
document.body.appendChild(div);

const eventElement = document.getElementsByClassName("events")[0];
eventElement.innerHTML = "Soccer training Wednesday";
eventElement.style.backgroundColor = "grey";
console.log(eventElement);
document.body.appendChild(eventElement);
