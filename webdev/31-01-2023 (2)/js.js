const maindiv = document.querySelector(".main");

let x=1;
let y=1;

let outsidediv;
let insidediv;

for(x=1; x<=200; x++){
    outsidediv = document.createElement('div');
    outsidediv.classList.add('outside');
    for(y=1; y<=200; y++){
        insidediv = document.createElement('div');
        insidediv.classList.add("inside");
        outsidediv.append(insidediv);
    }
    maindiv.append(outsidediv);
}

let insidedivs = document.querySelectorAll(".inside");
let mouseho = document.querySelectorAll('inside');
insidedivs.forEach((div)=> {
    div.addEventListener('mouseover', () =>{
        div.classList.add('hovered');

    })
})