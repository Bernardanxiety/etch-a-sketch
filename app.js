const grid = document.querySelector('.grid');
const parentWidth = grid.offsetWidth;
const parentHeight = grid.offsetHeight;
const numberOfGrids = 16;
const clear = document.querySelector('.clear');
const div = document.createElement('div');
const gridInner = document.querySelectorAll('.gridInner');
const colorBtns = document.querySelectorAll('.color');
let currentSize = numberOfGrids;
let color = 'hsl(0, 0%, 0%)';

colorBtns.forEach((colorBtn) => colorBtn.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    
    
}));



function setGrid(currentSize) {
    grid.setAttribute('style', `display: grid; grid-template-rows: repeat(${currentSize}, 1fr); grid-template-columns: repeat(${currentSize}, 1fr)`);
}

function fillGrid() {
    let amount = currentSize*currentSize;
    for (let i = 1; i <= amount; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'gridInner');
        grid.appendChild(div);
    }

}



clear.addEventListener('click', () => {
    

    setGrid(currentSize);
    fillGrid();
    addBG();
})

window.onload = () => {
    setGrid(currentSize);
    fillGrid();
    addBG();
}




