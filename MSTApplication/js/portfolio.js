document.querySelectorAll(".card").forEach((item, index) => {
  item.style.animationDelay = `${index * 0.2}s`; // Set sequential delay
});
