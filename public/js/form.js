//Variables
const displayJob2 = document.getElementById("displayWork2");
const displayJob3 = document.getElementById("displayWork3");
const displayEd1 = document.getElementById("displayEd1");
const displayEd2 = document.getElementById("displayEd2");
const displayCert1 = document.getElementById("displayCert1");
const displayCert2 = document.getElementById("displayCert2");




//Functions
function showJob2 () {
    displayJob2.classList.remove("hide");
}

function showJob3 () {
    displayJob3.classList.remove("hide");
}

function showEd1 () {
    displayEd1.classList.remove("hide");
}

function showEd2 () {
    displayEd2.classList.remove("hide");
}

function showCert1 () {
    displayCert1.classList.remove("hide");
}

function showCert2 () {
    displayCert2.classList.remove("hide");
}

// const formSubmit = async => {

// }

//Event Listeners
displayJob2.addEventListener("click", showJob2);
displayJob3.addEventListener("click", showJob3);
displayEd1.addEventListener("click", showEd1);
displayEd2.addEventListener("click", showEd2);
displayCert1.addEventListener("click", showCert1);
displayCert2.addEventListener("click", showCert2);


// document
//     .querySelector('#submitBtn')
//     .addEventListener("submit", )