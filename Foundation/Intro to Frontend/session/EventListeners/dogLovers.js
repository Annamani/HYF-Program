// setInterval(() => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//         .then(Response => Response.json())
//         .then(data => {
//             const img = data.message;
//             const imgElement = document.createElement("img");
//             imgElement.src = img;
//             document.body.appendChild(imgElement);
//         });
// }, 2000);

fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
        const breeds = Object.keys(data.message);
        const select = document.createElement("select");
        breeds.forEach(breed => {
            const option = document.createElement("option");
            option.value = breed;
            option.textContent = breed;
            select.appendChild(option);
        });
        document.body.appendChild(select);
    });
// Display a random image of a breed from the list
select.addEventListener("change", (event) => {
    const breed = event.target.value;
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(data => {
            const img = data.message;
            const imgElement = document.createElement("img");
            imgElement.src = img;
            document.body.appendChild(imgElement);
        });
});

select.addEventListener("change", (event) => {
    const breed = event.target.value;
    const breedName = document.createElement("p");
    breedName.textContent = breed;
    document.body.appendChild(breedName);
});