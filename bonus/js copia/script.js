function viewGrid(){
    function createCell(num){
        const element = document.createElement('div');
        element.classList.add('square');
        element.innerText = num;
        return element;
    }

    const grid = document.getElementById('grid');

    for(let i=0; i<100; i++){
        let square = createCell(i+1);

        grid.appendChild(square);

        square.addEventListener('click', function(){
            this.classList.add('bg-primary');
            console.log(square.textContent);
        });
    }
}
let button = document.getElementById('start');
button.addEventListener('click', function(){
    viewGrid();
});
