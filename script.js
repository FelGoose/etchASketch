const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

//default inputSize
let DefaultBoxesPerSide = 10;

/* let canvasSize = 256 * 4; 
1024*/
let canvasSize = 500;

newDrawing(DefaultBoxesPerSide);


 // mouseover boxes
 addEventListener("mouseover", (e) => {
    if (e.target.classList[0] !== "box") return;
    e.target.classList.add("hover");
});

// size button
const btnBoxSize = document.querySelector('#boxSize');
 btnBoxSize.addEventListener("click", (e) =>{
    changeSize();
 });

// changeSize
function changeSize(){
    boxesPerSide = prompt("How many boxes per side? (Max 100)"); 
    if(boxesPerSide > 100){
        return(alert("too many boxes! (max 100)"))
    }
    removeDrawing(boxesPerSide);
    newDrawing(boxesPerSide);
}

// new drawing
function newDrawing(boxesPerSide){
    // box amount
    for(i=0; i<boxesPerSide * boxesPerSide; i++){

        let boxSize = (canvasSize / boxesPerSide);

        const box = document.createElement("div");
        box.classList.add("box");
        box.style.cssText = `width: ${boxSize}px; height: ${boxSize}px`;
        container.appendChild(box);
    }
}

//remove drawing
function removeDrawing(){
    const allBoxes = document.querySelectorAll(".box");
    
    for(i=0; i<allBoxes.length ; i++){
        const box = document.querySelector(".box");
        box.classList.remove("hover");
        container.appendChild(box);

        container.removeChild(box);
    }
}