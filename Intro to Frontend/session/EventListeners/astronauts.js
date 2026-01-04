// Use this api to fetch how many astronauts are currently in spaces.

fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
        const numberOfAstronauts = data.number;
        for (let i = 0; i < numberOfAstronauts; i++) {
            const astronaut = data.people[i].name;
        }
        const astronautText = `There are ${numberOfAstronauts} astronauts in space, they are:\n` + data.people.map(person => person.name).join('\n');
        const preElement = document.createElement('pre');
        preElement.textContent = astronautText;
        document.body.appendChild(preElement);
    });
