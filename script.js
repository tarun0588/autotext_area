// let text = document.getElementById("text");
// text.addEventListener('input',(e)=>{
//     let value = e.target.value;
//     localStorage.setItem('text',value);
// })
// function  getText(){
//     text.value = localStorage.getItem( 'text' );
// }
// getText();

// Get the textarea element
const textarea = document.getElementById("myTextarea");

// Function to save the textarea content to local storage
function saveToLocalStorage() {
    localStorage.setItem("savedText", textarea.value);
}

// Check if there's existing data in local storage and populate the textarea
if (localStorage.getItem("savedText")) {
    textarea.value = localStorage.getItem("savedText");
}

// Add an event listener to the textarea for input changes and save to local storage
textarea.addEventListener("input", saveToLocalStorage);