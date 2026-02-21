//IMAGE Inserter

function imageInserter(imageUrl, elementToAppendImageTo) {
    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    elementToAppendImageTo.appendChild(imgElement);
}

imageInserter(
    "https://picsum.photos/536/354",
    document.querySelector("body"),
);