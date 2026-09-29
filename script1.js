// 1. Array of simple colors
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];

// 2. Find the button in HTML
const button = document.getElementById("colorBtn");

// 3. Change color on click
button.addEventListener("click", function () {
    // Pick a random index number from 0 to colors.length - 1
    const randomIndex = Math.floor(Math.random() * colors.length);

    // Apply the color to the page background
    document.body.style.backgroundColor = colors[randomIndex];
});