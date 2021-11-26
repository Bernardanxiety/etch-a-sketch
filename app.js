const grid = document.querySelector('.grid');
const div = document.createElement('div');
const colorBtns = document.querySelectorAll('.color');
const clear = document.querySelector('.clear');
let currentSize = 16;
let currentColor = `hsl(0, 0%, 0%)`;
let mode = '';

colorBtns.forEach((colorBtn) => colorBtn.addEventListener('click', setMode));

clear.addEventListener('click', function() {
    const DIVS = document.querySelectorAll('.div');
    DIVS.forEach((div) => div.style.backgroundColor = '');
    let newGrid = Number(prompt('How many rows and columns do you want? Capped at 100!'));

    if(newGrid > 100) {
        setGrid(100);
        fillGrid(100);
        addBG();
    }
    else {
        setGrid(newGrid);
        fillGrid(newGrid);
        addBG();
    }
})

function setMode(e) {
    mode = e.target.textContent;
    console.log(mode);
}

function setColor(e) {
    if(mode === 'Rainbow') {
        let H = Math.floor(Math.random()*360+1);
        let S = Math.floor(Math.random()*100+1);
        let L = Math.floor(Math.random()*100+1);
        e.target.style.backgroundColor = `hsl(${H}, ${S}%, ${L}%)`;
    }
    else if(mode === 'Black') {
        e.target.style.backgroundColor = `hsl(0, 0%, 0%)`;
    }
    else if(mode === 'White') {
        e.target.style.backgroundColor = `hsl(0, 0%, 100%)`;
    }
    else if(mode === '') {
        e.target.style.backgroundColor = 'pink';
    }
}



function randomNumber(a) {
    let number;
    number = Math.floor(Math.random()*a+1);
    return number;
}

function randomColor() {
    let randomColor = '';
    return randomColor = `hsl(${Math.floor(Math.random()*360+1)}, ${Math.floor(Math.random()*100+1)}%, ${Math.floor(Math.random()*100+1)}%)`;
}

function addBG() {
    const DIVS = document.querySelectorAll('.div');

    grid.addEventListener('mousedown', (e) => {
        e.preventDefault();
        DIVS.forEach((div) => div.addEventListener('mouseover', setColor));
    })

    grid.addEventListener('mouseup', (e) => {
        DIVS.forEach((div) => div.removeEventListener('mouseover', setColor));
    })
    

    
    

}

function setGrid(rows) {
    grid.setAttribute('style', `display: grid; grid-template-rows: repeat(${rows}, 1fr); grid-template-columns: repeat(${rows}, 1fr)`);
}

function fillGrid(currentSize) {
    let amountOfDivs = currentSize*currentSize;
    for (let i=1; i<=amountOfDivs; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'div');
        grid.appendChild(div);
    }
}






window.onload = () => {
    setGrid(currentSize);
    fillGrid(currentSize);
    
    addBG();
}




