const container = document.querySelector("#container");

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
    container.appendChild(box);
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
    });
}

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
});
container.appendChild(resetButton);