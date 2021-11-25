const grid = document.querySelector('.grid');
const parentWidth = grid.offsetWidth;
const parentHeight = grid.offsetHeight;
const numberOfGrids = 16;
const numberOfDivs = numberOfGrids*numberOfGrids;
const divs = document.querySelectorAll('div');


grid.setAttribute(`style`, `display: grid; grid-template-rows: repeat(${numberOfGrids}, 1fr);
grid-template-columns: repeat(${numberOfGrids}, 1fr)`);





for (let i=0; i<numberOfDivs; i++) {
    const gridCard = document.createElement('div');
    grid.appendChild(gridCard);
}

divs.forEach((div) => div.addEventListener('mouseover', (e) => {
    let randomColor = Math.floor(Math.random()*100 +1);
    let randomHsl = Math.floor(Math.random()*360 + 1);
    e.target.setAttribute(`style`, `background-color: hsl(${randomHsl}, ${randomColor}%, ${randomColor}%)`);
}))




