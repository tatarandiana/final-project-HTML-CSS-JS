function welcomeMessage() {
    alert("New beginnings are an open invitation to change your story. Welcome !");
}

function showProjectMessage() {
    alert("A mind that is stretched by a new experience can never go back to its old dimensions.");
}
function sendMessage(){
    alert("A mind that is stretched by a new experience can never go back to its old dimensions.");
}
function contactMessage(){
    alert("Share your details in the form");
}
function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Fill in all the details.");
    } else {
        alert("Your message is successfully sent !");
    }
}