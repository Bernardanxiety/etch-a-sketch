const grid = document.querySelector('.grid');
const parentWidth = grid.offsetWidth;
const parentHeight = grid.offsetHeight;
const numberOfGrids = 16;
const clear = document.querySelector('.clear');
const div = document.createElement('div');
const gridInner = document.querySelectorAll('.gridInner');
const colorBtns = document.querySelectorAll('.color');
let currentSize = numberOfGrids;
let color = 'black';

colorBtns.forEach((colorBtn) => colorBtn.addEventListener('click', (e) => {
    colorBtns.forEach((colorBtn) => colorBtn.removeAttribute('style', 'background-color: red'));
    // e.target.setAttribute('style', 'background-color: red');
    let activeColor = e.target.textContent;
    addBG(activeColor);
    e.target.setAttribute('style', `background-color: ${color}`);
}))



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

function addBG(activeColor) {
    const gridInner = document.querySelectorAll('.gridInner');
    let currentColor;
    if(activeColor==='Random') {
        function randomColor() {
            let randomNumber = Math.floor(Math.random()*360 + 1);
        let randomPercent = Math.floor(Math.random()*100 + 1);
        let anotherPercent = Math.floor(Math.random()*100+1);
        currentColor = `hsl(${randomNumber}, ${randomPercent}%, ${anotherPercent}%)`;
        return currentColor;
        }
        currentColor = randomColor();
        console.log(currentColor);
    }
    else {
        currentColor = activeColor;
    }
    gridInner.forEach((gridInner) => gridInner.addEventListener('mouseover', (e) => {
        e.target.setAttribute('style', `background-color: ${currentColor}`);
    }))

    return color = currentColor;
}

clear.addEventListener('click', () => {
    const gridInner = document.querySelectorAll('.gridInner');
    gridInner.forEach((gridInner) => gridInner.removeAttribute('style'));
    currentSize = Number(prompt('How many rows and columns do you want? Capped at 100'));
    if(currentSize>100) {
        currentSize = 100;
        alert('Can\'t be higher than 100!');
    }
    else if(currentSize===0) {
        currentSize = 16;
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




