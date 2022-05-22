// ALWAYS USE 
'use strict'

let resultsDiv = document.querySelector("#results");

// HTTP requests - request/response
// Get - READ
axios.get("https://reqres.in/api/users")
    .then((response) => {
        // logs the response in terminal for us to see
        // console.log(response);
        // Shows only the data for the users
        displayResults(response.data.data);
    })
    .catch((error) => {
        console.error(error);
    })


// Post - CREATE

// Put/patch - UPDATE

// delete - DELETE

let displayResults = (da) => {
    for(let entry of da) {
        const p = document.createElement("p");
        const text = document.createTextNode(`${entry.first_name} ${entry.last_name} ${entry.email}`)
        p.appendChild(text);
        resultsDiv.appendChild(p);
    };
};