//Variables
const displayJob2Btn = document.getElementById("displayWork2");
const displayJob3Btn = document.getElementById("displayWork3");
const displayEd1Btn = document.getElementById("displayEd1");
const displayEd2Btn = document.getElementById("displayEd2");
const displayCert1Btn = document.getElementById("displayCert1");
const displayCert2Btn = document.getElementById("displayCert2");
const displayJob2 = document.getElementsByClassName("hideJ2");
const displayJob3 = document.getElementsByClassName("hideJ3");
const displayEd1 = document.getElementsByClassName("hideEd1");
const displayEd2 = document.getElementsByClassName("hideEd2");
const displayCert1 = document.getElementsByClassName("hideC1");
const displayCert2 = document.getElementsByClassName("hideC2");


//Functions
function showJob2 () {
    displayJob2.classList.remove("hideJ2");
}

function showJob3 () {
    displayJob3.classList.remove("hideJ3");
}

function showEd1 () {
    displayEd1.classList.remove("hideEd1");
}

function showEd2 () {
    displayEd2.classList.remove("hideEd2");
}

function showCert1 () {
    displayCert1.classList.remove("hideC1");
}

function showCert2 () {
    displayCert2.classList.remove("hideC2");
}

// const formSubmit = async => {

// }

//Event Listeners
displayJob2Btn.addEventListener("click", showJob2);
displayJob3Btn.addEventListener("click", showJob3);
displayEd1Btn.addEventListener("click", showEd1);
displayEd2Btn.addEventListener("click", showEd2);
displayCert1Btn.addEventListener("click", showCert1);
displayCert2Btn.addEventListener("click", showCert2);


// document
//     .querySelector('#submitBtn')
//     .addEventListener("submit", )