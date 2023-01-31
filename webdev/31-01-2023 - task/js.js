let heading = document.querySelector('#output');
let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let reset = document.querySelector('#reset');
let x=0;
add.addEventListener('click', () => {
    let result = Number(heading.innerText) + 1;
    heading.innerText = result;
})
subtract.addEventListener('click', () => {
    let result = Number(heading.innerText) - 1;
    heading.innerText = result;
})
reset.addEventListener('click', () => {
    let result = 0;
    heading.innerText = result;
})