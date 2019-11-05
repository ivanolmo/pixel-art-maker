// add an event listener to assign the grid size and then call the makeGrid function
document.addEventListener('submit', function (event) {
    event.preventDefault();
    const gridWidth = document.getElementById('inputWidth').value;
    const gridHeight = document.getElementById('inputHeight').value;
    makeGrid(gridHeight, gridWidth);
    });


// function takes two arguments to create a grid of the specified size
function makeGrid(height, width) {
    const designCanvas = document.getElementById('pixelCanvas');

    // resets canvas back to default when function is called after clicking 'submit'
    designCanvas.innerHTML = '';

    // loop that creates canvas by iterating over height and width values
    for (let i = 0; i < height; i++) {
        let row = designCanvas.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);

            // event listener to change pixel colors. also changes pixel back to white if it already has a color
            cell.addEventListener('click', function () {
                if (cell.hasAttribute('style')) {
                    cell.removeAttribute('style');
                } else {
                    cell.style.backgroundColor = document.getElementById('colorPicker').value;
            }})
        }
    }
}
