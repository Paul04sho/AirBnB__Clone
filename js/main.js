
// Function to change the color of the icon once time it's clicked
function changeColor() {
    const icon = document.querySelectorAll('#heart');

    icon.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle('red');
        })
    })
}

changeColor();

// Show the menu once the hamburger button is clicked
    const hamburgerToggle = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".fade-in-menu");
    const navLinks = document.querySelectorAll(".item");

    hamburgerToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

// Menu is closed when one of the links is clicked    
   navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
   });