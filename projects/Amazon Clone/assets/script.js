// Event Prevention 
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable right-click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable text selection
document.addEventListener("selectstart", (event) => event.preventDefault());

// Disable image dragging
document.addEventListener("dragstart", (event) => event.preventDefault());