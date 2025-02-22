document.addEventListener("DOMContentLoaded", function () {
    // Contact Form Submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.querySelector("input[type='text']").value;
        let email = document.querySelector("input[type='email']").value;
        let message = document.querySelector("textarea").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields before submitting.");
        } else {
            alert(`Thank you, ${name}! Your message has been sent.`);
            document.getElementById("contact-form").reset();
        }
    });

    // Dark Mode Toggle
    const themeToggle = document.createElement("button");
    themeToggle.innerText = "Toggle Dark Mode";
    themeToggle.classList.add("toggle-theme");
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        themeToggle.innerText = document.body.classList.contains("dark-mode")
            ? "Switch to Light Mode"
            : "Switch to Dark Mode";
    });
});