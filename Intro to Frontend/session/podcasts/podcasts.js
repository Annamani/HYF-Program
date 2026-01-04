const podcasts = [
    {
        name: "The mystery om of Johan Klausen Varbourg",
        imageUrl: "https://picsum.photos/536/354",
    },
    {
        name: "Tips about dogs with small legs",
        imageUrl: "https://picsum.photos/536/354",
    },
    {
        name: "You, me, we and us",
        imageUrl: "https://picsum.photos/536/354",
    },
    {
        name: "Breakfast news - Dinner edition",
    },
];
const podcastContainer = document.getElementById("podcastList");
const podCastList = document.createElement("ul");
for (let i = 0; i < podcasts.length; i++) {
    const listItem = document.createElement("li");
    const headingElement = document.createElement("h1");
    headingElement.innerHTML = podcasts[i].name;
    listItem.appendChild(headingElement);
    podCastList.appendChild(listItem);
    if (podcasts[i].imageUrl) {
        const imageElement = document.createElement("img");
        imageElement.src = podcasts[i].imageUrl;
        listItem.appendChild(imageElement);
    }
}
podcastContainer.appendChild(podCastList);