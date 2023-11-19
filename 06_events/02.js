let inputEl = document.createElement("input");

function printKeydown() {
  console.log("key pressed");
}

inputEl.addEventListener("keydown", printKeydown);
document.body.appendChild(inputEl);