document.addEventListener("DOMContentLoaded", function () {
  const coreServices = document.getElementById("core-services");

  // Debounce function to limit how often the scroll event handler is called
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function handleScroll() {
    const rect = coreServices.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
      coreServices.classList.add("visible");
      window.removeEventListener("scroll", handleScroll);
    }
  }

  // Use the debounce function for the scroll event
  window.addEventListener("scroll", debounce(handleScroll, 100));
  handleScroll(); // Check on load in case it's already in view
});

//It is for animation of what our clients say about us
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");

  // Set up the intersection observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "slideIn 0.6s forwards ease-out";
          observer.unobserve(entry.target); // Stop observing after animation is triggered
        }
      });
    },
    {
      threshold: 0.6, // Trigger when 60% of the element is visible
    }
  );

  // Observe each testimonial
  testimonials.forEach((testimonial) => {
    observer.observe(testimonial);
  });
});

//==================================== For animation of hero text ============================================================================================
window.addEventListener("load", function () {
  const heroText = document.querySelector(".hero-text");
  heroText.classList.add("animate"); // Add class to trigger animation on page load
});
