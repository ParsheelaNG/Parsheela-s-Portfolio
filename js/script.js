// // EmailJS contact form submission handling
// emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID

// // Handle form submission for contact form
// document.getElementById("contact-form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the default form submission (page reload)

//     emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
//         .then(function(response) {
//             alert("Message Sent Successfully!"); // Notify the user upon success
//             document.getElementById("contact-form").reset(); // Reset the form after submission
//         }, function(error) {
//             alert("Message Sending Failed. Please try again."); // Notify the user if it fails
//             console.error("EmailJS Error:", error);
//         });
// });

<script>
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        document.querySelector(".navbar-menu").classList.toggle("active")
    });
</script>


// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Mobile Navigation Toggle (For Responsive Design)
const navToggle = document.querySelector(".navbar .toggle"); // Toggle button in navbar
const navLinks = document.querySelector(".navbar .navlinks"); // Links list in navbar

navToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// Optional: Scroll animations (For example, when an element comes into view)
const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

function animateOnScroll() {
    const windowHeight = window.innerHeight;
    
    elementsToAnimate.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < windowHeight - 100) {
            element.classList.add("visible"); // Add class for animation when visible
        }
    });
}

// Listen for scroll events
window.addEventListener("scroll", animateOnScroll);

// Call initially to check on page load
animateOnScroll();
