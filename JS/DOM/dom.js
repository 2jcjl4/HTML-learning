'use strict'

// Selectors
let mainDiv = document.querySelector("#addToMe");

// Functionality
let addToPage = () =>{
    let newDiv = document.createElement("div");
    let newHeading = document.createElement("h1");
    let newText = document.createTextNode("WE LOVEEE JS!");

    newHeading.appendChild(newText); // <h1> WE LOVEEE JS! </h1>
    newDiv.appendChild(newHeading); // <div><h1> WE LOVEEE JS! </h1></div>

    mainDiv.appendChild(newDiv);
};
addBtn.addEventListener("click", addToPage);