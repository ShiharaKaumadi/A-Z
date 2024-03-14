const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
    const name = prompt("Enter a new name");
    button.textContent = `Player 1: ${name}`;
}
document.addEventListener("DOMContentLoaded", () => {
    function createParagraph() {
        const para = document.createElement("p");
        para.textContent = "You clicked the button!";
        document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll("button");

    for (const button of buttons) {
        button.addEventListener("click", createParagraph);
    }
});

function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "Dewani Inima!";
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}


