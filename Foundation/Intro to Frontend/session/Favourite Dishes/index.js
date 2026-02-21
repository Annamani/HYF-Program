const fav_dishes = ["Chicken Salad", "Pasta", "Chicken Biryani", "Wraps", "Pizza"];
const myContainer = document.getElementById("dishesContainer");
const newList = document.createElement("ul");
for (let i = 0; i < fav_dishes.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = fav_dishes[i];
    newList.appendChild(listItem);
}
console.log(newList);
myContainer.appendChild(newList);
