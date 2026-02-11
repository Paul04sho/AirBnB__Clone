
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