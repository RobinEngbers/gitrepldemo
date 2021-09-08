function setup() {
  createCanvas(400, 400);
}

function draw() {
  fill()
  rect(30, 20, 55, 55)
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}