// const btn = document.createElement("button");
// btn.class = "myButtonfromJS";
// btn.innerHTML = "Click Me";
// document.body.appendChild(btn);
// btn.addEventListener("click", function () {
//     console.log("Button clicked!");
//     btn.innerHTML = "Button clicked!";
// });

const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Button";
document.body.appendChild(toggleBtn);
toggleBtn.addEventListener("click", () => {
    toggleBtn.style.color = "black";
    toggleBtn.style.backgroundColor = "green";
    toggleBtn.textContent = "Toggle button clicked";
});

