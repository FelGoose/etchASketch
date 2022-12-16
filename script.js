const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

let size = 256;
for(i=0; i<size; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
}

// addEventListener("click", (e) =>{
//     if (e.target.classList[0] !== "box") return;
//     e.target.classList.toggle("active");
// });

addEventListener("mouseover", (e) => {
    if (e.target.classList[0] !== "box") return;
    e.target.classList.add("hover");
});