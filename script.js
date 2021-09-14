var x, y, vx, vy;

function setup() {
  createCanvas(500, 500);

  x = 30;
  y = 200;
  vx = 5;
  vy = 5;
}

function draw() {
    background(255);

  ellipse(x,y,50,50);
  x = x + vx;
  y = y + vy;

  ellipse(x,y,50,50);
  x = x + vx;
  y = y + vy;

  if (x < 25 || x > 475){
    vx = vx * -1;
  }

  if (y < 25 || y > 475){
    vy = vy * -1;
  }
}