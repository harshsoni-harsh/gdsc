const maindiv = document.querySelector('.main');

let newelement = document.createElement('div');
let removeElement;

const btn = document.querySelectorAll('btn');
const btn2 = document.querySelector('#btn2');

btn.forEach((button) => {

    button.addEventListener('click', () => {
        const newelement = document.createElement('div');
        
        newelement.classList.add('first');
        newelement.textContent=("Hi!");

        maindiv.append(newelement);
    })
})
    
btn2.addEventListener('click', () => {
    removeElement = document.querySelector('.first');
    maindiv.removeChild(removeElement);
})










/*
for(var k=0; k<10; k++){
    for(var i=0; i<10; i++){
        const maindiv = document.querySelector('.main');
        for(var j=0; j<100000; j++);
        const newelement = document.createElement('div');
        newelement.classList.add('new');
        maindiv.append(newelement);
        newelement.setAttribute('style','background-color: black; height: 10px; width: 10px; margin: 10px');
    }
    const maindiv = document.querySelector('.main');
        for(var j=0; j<100000; j++);
        const newelement = document.createElement('br');
        maindiv.append(newelement);
}
*/