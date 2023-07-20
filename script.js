//your JS code here. If required.
// Function to update the size information in the <h1> tag
function updateSizeInfo() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeInfoElement = document.querySelector("#sizeInfo h1");
    sizeInfoElement.textContent = `Width: ${width} and Height: ${height}`;
}

// Call the updateSizeInfo function when the window is resized
window.addEventListener('resize', updateSizeInfo);

// Initial call to set the initial size information
updateSizeInfo();
