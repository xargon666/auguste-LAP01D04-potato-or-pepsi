// ********************************************
// SETUP
const form = document.querySelector('#new-pp-form');

// Bind event listeners
form.addEventListener('submit', submitPp);

// Fetch all cats as soon as app is loaded
getAllPp();
// ********************************************
