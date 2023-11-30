function createCell(num, numPerSide){
    const element = document.createElement('div');
    element.classList.add('square');
    element.innerText = num;

    let sideLength = `calc(100vw / ${numPerSide} - 10px)`;
    element.style.width = sideLength;
    element.style.height = sideLength;
    console.log(sideLength);
    return element;
}
function viewGrid(totalCells, cellsPerSide){

    const grid = document.getElementById('grid');
    

    for(let i=0; i<totalCells; i++){
        let square = createCell(i+1, cellsPerSide);

        grid.appendChild(square);
    }
}

function forLevel(){
    document.getElementById('grid').innerHTML = '';

    let level_selector = document.getElementById('difficulty');
    let level = parseInt(level_selector.value);

    let numCells;
    let cellsPerSide;


    switch(level){
        case 1:
            numCells = 100;
            cellsPerSide = 10;
            break;

        case 2:
            numCells = 81;
            cellsPerSide = 9;
            break;

        case 3:
            numCells = 49;
            cellsPerSide = 7;
            break;

        default:
            numCells = 100;
            cellsPerSide = 10;
            break;
    }
    viewGrid(numCells, cellsPerSide);
}


let button = document.getElementById('start');
button.addEventListener('click', function(){
    
    forLevel();
});

