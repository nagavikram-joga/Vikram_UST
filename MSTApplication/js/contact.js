// Toggle Contact Form Visibility
function toggleContactForm() {
  const contactForm = document.querySelector(".contact-form");
  contactForm.style.display =
    contactForm.style.display === "flex" ? "none" : "flex";
}

// Form Submission (Dummy)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    form.reset();
  });
});
