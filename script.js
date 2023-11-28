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
            gridSquare.classList.add("grid-square");
            gridRow.appendChild(gridSquare);
            SetHoverEffect(gridSquare);
        }

        container.appendChild(gridRow);

    }

}

function changeGridSize () {
    let size = prompt("Enter the size you want to your square grid to be (cannot be a number less than 1 or greater than 99): ");
    
    if (size === null) {
        return;
    }

    while(+size >= 100 || +size <= 0) {
        let size = prompt("Please enter a valid size (it cannot be over 99 or less than 1)")
    }

    

    createGrid(size);

}

createGrid();

