// grab elements
const form = document.getElementById("contactForm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const service = document.getElementById("service");
const message = document.getElementById("message");

// form submit event
form.addEventListener("submit", function(event) {

    // check required fields
    if (fname.value === "" || lname.value === "" || email.value === "" || service.value === "") {
        event.preventDefault(); // stop form submission
        message.innerHTML = "Please fill out all required fields.";
        message.style.color = "red";
        return;
    }

    // personalized message
    message.innerHTML = `Thank you, ${fname.value}! We will contact you soon about your ${service.value}.`;
    message.style.color = "green";
});