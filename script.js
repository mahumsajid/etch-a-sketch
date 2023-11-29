let currentSize;

function SetHoverEffect (gridSquare) {

    gridSquare.addEventListener("mouseover", (event) => {
        gridSquare.style.backgroundColor = "blue";
    });

}

function createGrid (size = 16) {

    let container = document.querySelector(".container");
    
    for (let i = 0; i < size; i++) {
        
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for (let j = 0; j < size; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square", `row${i+1}`);
            gridRow.appendChild(gridSquare);
            SetHoverEffect(gridSquare);
        }

        container.appendChild(gridRow);

    }

}

function removeGrid () {

    let container = document.querySelector(".container");
    let gridRows = document.querySelectorAll(".grid-row");

    gridRows.forEach((gridRow) => {
        container.removeChild(gridRow);
    });

}

function changeGridSize () {
    let newSize = prompt("Enter the size you want to your square grid to be (cannot be a number less than 1 or greater than 99): ");
    
    if (newSize === null) {
        return;
    }

    while(+newSize >= 100 || +newSize <= 0) {
        let newSize = prompt("Please enter a valid size (it cannot be over 99 or less than 1)")
    }

    removeGrid();
    createGrid(newSize);

}

createGrid();

