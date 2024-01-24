
function getData(url) {
    const promise = fetch(url);
    return promise
        .then((response) => response.json())
        .then((parsedData) => {
            console.log(parsedData);
            return parsedData;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

async function fetchData(){
    const data = await getData(charizardUrl);
    const data2 = await getData(randomDog); //it give a url link to picture
    const data3 = await getData(dogFacts);
    const abilities = data.abilities;
}
///////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    // Make API request
    fetch(charizardUrl)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error fetching data:', error));
});

function displayData(data) {
    const dataContainer = document.getElementById('data-container');

    // Display up to 30 items
    for (let i = 0; i < Math.min(data.length, 30); i++) {
        const item = data[i];

        // Display at least 3 values (adjust property names accordingly)
        const html = `
            <div>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <img src="${item.coverImage}" alt="Cover Image">
            </div>
        `;

        // Append HTML to dataContainer
        dataContainer.innerHTML += html;
    }
}




// //#1 
// Fetch data from an API (resource provided below) and display up to 30 items from that request in your HTML.
// In your HTML you will display the array of data you get back (i.e. if it was an array of movies, you would display the list of movies).
// Display a minimum of 3 values from the object in the array of data you get back for each item. (i.e. movie name, movie description, cover image).


fetchData()
