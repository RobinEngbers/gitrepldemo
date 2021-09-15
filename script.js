class Ball {
  constructor(x, y, w, h, vx, vy) {
    this.x = 30;
    this.y = 200;
    this.w = 50
    this.h = 50
    this.vx = 5;
    this.vy = 5;
  }

   drawBall(){
    ellipse(this.x,this.y,this.w,this.h);
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;

    if (this.x < 25 || this.x > 475){
      this.vx = this.vx * -1;
    }

    if (this.y < 25 || this.y > 475){
      this.vy = this.vy * -1;
    }
   }
}
var ball1, ball2, ball3

function setup() {
  createCanvas(500, 500);

  ball1 = new Ball(30,200,50,50,5,5,"red");
  ball2 = new Ball(120,210,50,50,3,3,"blue");
  ball3 = new Ball(200,150,50,50,1,1,"green");
}

function draw() {
  background(0);

  ball1.drawBall();
  ball2.drawBall();
  ball3.drawBall();
}