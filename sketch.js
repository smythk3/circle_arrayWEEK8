var circle = [];
var numObjects = 15;
var speed;

function setup() {
  createCanvas(800, 600);

  //populate the array of objects using a for() loop

  for (var i = 0; i < numObjects; i++) {
    circle[i] = {
      //here we write an object for putting inside the circle array
      x: random(25, width-25),
      y: random(0, height),
      width: 25,
      height: 25,
      color: random(255),
      speed: random(10),

      //display function
      display: function() {
        fill(this.color, random(10, 150, 30), random(50, 90, 0));
        ellipse(this.x, this.y, this.width, this.height);
      },

      //move function
      move: function() {
        this.x = this.x + this.speed;

        if (this.x > (width - this.width)) {
          this.speed = -this.speed;
        }
        if (this.x < (0 + this.width)) {
          this.speed = -this.speed;
        }
      },
    };
  }
}


function draw() {
  background(255);
  
  if (mouseIsPressed) {
    background(random(60,0,50), random(30,100,0), random(0,20,100));
  }

  for (var i = 0; i < numObjects; i++) {
    circle[i].display();
    circle[i].move();
  }



}