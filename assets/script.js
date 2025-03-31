const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll(".close-menu");

// Open Menu
menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
});

// Close Menu (On Button Click)
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
});

// Close Menu (On Clicking Any Menu Link)
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("-translate-x-full");
    });
});

// Close Menu (On Clicking Outside)
document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        mobileMenu.classList.add("-translate-x-full");
    }
});

var options = {
  strings: ["WEB DEVELOPER"],
  typeSpeed: 100,
  backSpeed: 50,
  showCursor: true,
};
var typed = new Typed("#typed-text", options);

let index = 0;
const slider = document.getElementById("projectSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const scrollStep = slider.children[0].offsetWidth + 16; // Adjust based on your design
let autoScrollInterval;
let hasScrolled = false; // Track if the slide has been moved

// Function to move next
function moveNext() {
  if (index >= slider.children.length - 1) {
    // If reached the last slide, reset to start
    index = 0;
  } else {
    index++;
  }
  updateSlider();
  hasScrolled = true; // Mark that a slide has changed
}

// Function to move previous (only works if slide has changed)
function movePrev() {
  if (!hasScrolled) return; // Prevent going back if not moved forward

  if (index <= 0) {
    // Prevent going before first slide
    index = 0;
  } else {
    index--;
  }
  updateSlider();
}

// Function to update the slider position
function updateSlider() {
  const scrollAmount = index * scrollStep;
  slider.style.transform = `translateX(-${scrollAmount}px)`;
}

// Event listeners for buttons
nextBtn.addEventListener("click", () => {
  moveNext();
  resetAutoScroll();
});

prevBtn.addEventListener("click", () => {
  movePrev();
  resetAutoScroll();
});

// Auto-scroll function
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    moveNext();
  }, 3000); // Adjust speed (3000ms = 3 seconds)
}

// Reset auto-scroll when manually interacted
function resetAutoScroll() {
  clearInterval(autoScrollInterval);
  startAutoScroll();
}

// Start auto-scrolling when page loads
startAutoScroll();

// Event Prevention 
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable right-click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable text selection
document.addEventListener("selectstart", (event) => event.preventDefault());

// Disable image dragging
document.addEventListener("dragstart", (event) => event.preventDefault());