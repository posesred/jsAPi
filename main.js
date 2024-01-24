async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

document.addEventListener("DOMContentLoaded", async function() {
    const charizardUrl = "https://pokeapi.co/api/v2/pokemon/charizard";
    const pikachuUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";
    const ditoUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

    const charizardData = await fetchData(charizardUrl);
    const pikachuData = await fetchData(pikachuUrl);
    const ditoData = await fetchData(ditoUrl);

    displayData(charizardData, "Charizard");
    displayData(pikachuData, "Pikachu");
    displayData(ditoData, "Ditto");
});

function displayData(data, name) {
    const dataContainer = document.getElementById('data-container');

    // Display the properties of the Pokemon
    const html = `
        <div>
            <h3>${name}</h3>
            <h4>${data.name}</h4>
            <p>${data.base_experience}</p>
            <img src="${data.sprites.front_default}" alt="${name} Image">
        </div>
    `;

    // Append HTML to dataContainer
    dataContainer.innerHTML += html;
}