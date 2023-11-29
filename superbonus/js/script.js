function createCell(num, cellsPerSide){
    const element = document.createElement('div');
    element.classList.add('square');
    element.innerText = num;

    let sideLength = calc(`100vw / ${cellsPerSide}`);
    element.style.width = sideLength;
    element.style.height = sideLength;

    return element;
}
function viewGrid(){

    const grid = document.getElementById('grid');
    
    
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
    }

    for(let i=0; i<numCells; i++){
        let square = createCell(i+1);

        grid.appendChild(square);
    }
}

let level_selector = document.getElementById('difficulty');
let level = parseInt(level_selector.value);
console.log(level_selector);


let button = document.getElementById('start');
button.addEventListener('click', function(){
    viewGrid();
});

