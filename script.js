function setup() {
  createCanvas(400, 400);
}

function draw() {
  fill(0, 255, 0);
  rect(20, 20, 60, 60);
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}