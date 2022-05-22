// Selectors
let mainDiv = document.querySelector("#cookieCounter");
let counter = 0
// Functionality
let addToPage = () =>{

    // Ty random internet people
    //  https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript

    // Clearing the div statement
    var div = document.getElementById('cookieCounter');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    };

    let newDiv = document.createElement("div");
    let newHeading = document.createElement("h1");
    let newText = document.createTextNode("Smiles: " + counter);
    newHeading.appendChild(newText); // <h1> WE LOVEEE JS! </h1>
    newDiv.appendChild(newHeading); // <div><h1> WE LOVEEE JS! </h1></div>
    mainDiv.appendChild(newDiv);
    counter++;
};
addBtn.addEventListener("click", addToPage);



let addToPageStart = () =>{
    let newDiv = document.createElement("div");
    let newHeading = document.createElement("h1");
    let newText = document.createTextNode(counter);

    newHeading.appendChild(newText); // <h1> WE LOVEEE JS! </h1>
    newDiv.appendChild(newHeading); // <div><h1> WE LOVEEE JS! </h1></div>

    mainDiv.appendChild(newDiv);
    counter++;

};

addToPageStart();