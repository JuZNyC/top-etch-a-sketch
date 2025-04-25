const container = document.querySelector("#container");
const body = document.querySelector("body");

function rgbRandom() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(color = "black") {
    input = prompt("Enter the number of boxes per side (1-100):", "16");
    if (input < 1 || input > 100) {
        alert("Please enter a number between 1 and 100.");
        input = prompt("Enter the number of boxes per side (1-100):", "16");
    }
    let boxAmount = input ** 2;
    boxSize = (Math.round(container.offsetWidth / 10) * 10)/input;
    console.log(container.offsetWidth);
    for (let i = 0; i < boxAmount ; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundColor = "white";
        box.style.border = "1px solid black";
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.boxSizing = "border-box";
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = color;
        });
        container.appendChild(box);
    }
}

const buttons = document.querySelector("#buttons");

const rbgButton = document.createElement("button");
rbgButton.textContent = "RBG";
rbgButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = rgbRandom();
        });
    });
});

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", () => {
    const child = container.querySelectorAll(".box");
    child.forEach((child) => {
        container.removeChild(child);
    });
    createGrid();
});

const opacityButton = document.createElement("button");
opacityButton.textContent = "Opacity";
opacityButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    let opacity = 0.1;
    boxes.forEach(box => {
        if (opacity < 1) {
            box.addEventListener("mouseover", () => {
                box.style.opacity = opacity;
                opacity += 0.1;
            });
        }
    });
})

buttons.appendChild(opacityButton);
buttons.appendChild(resetButton);
buttons.appendChild(rbgButton);
createGrid();