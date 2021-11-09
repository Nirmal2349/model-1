var board = document.createElement("div");
board.style.height = "200px";
board.style.width = "200px";

for (let index = 1; index <= 9; index++) {
  var box = document.createElement("div");
  box.style.height = "100px";
  box.style.width = "100px";
  box.style.backgroundColor = "green";
  board.appendChild(box);
}

document.body.appendChild(board);
