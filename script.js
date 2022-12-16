const container = document.createElement("div");

container.classList.add("container");

document.body.appendChild(container);

let size = 1000;

for(i=0; i<size; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
}

const clicker = addEventListener("click", (e) =>{
    console.log("click");
})