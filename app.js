const grid = document.querySelector('.grid');
const parentWidth = grid.offsetWidth;
const parentHeight = grid.offsetHeight;
const numberOfGrids = 16;
const clear = document.querySelector('.clear');
const div = document.createElement('div');
const gridInner = document.querySelectorAll('.gridInner');


let currentSize = numberOfGrids;

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

function addBG() {
    const gridInner = document.querySelectorAll('.gridInner');

    gridInner.forEach((gridInner) => gridInner.addEventListener('mouseover', (e) => {
        e.target.setAttribute('style', 'background-color: red');
    }))
}

clear.addEventListener('click', () => {
    const gridInner = document.querySelectorAll('.gridInner');
    gridInner.forEach((gridInner) => gridInner.removeAttribute('style'));
    currentSize = Number(prompt('How many rows and columns do you want? Capped at 100'));
    if(currentSize>100) {
        currentSize = 100;
        alert('Can\'t be higher than 100!');
    }

    setGrid(currentSize);
    fillGrid();
    addBG();

})

window.onload = () => {
    setGrid(currentSize);
    fillGrid();
    addBG();
}




