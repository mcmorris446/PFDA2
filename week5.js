/*
    Paste the code for your week 5 exercise below.
*/
let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 4.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function setup() {
  if( windowWidth > windowHeight ){
    createCanvas(windowHeight, windowHeight);
  }else{
    createCanvas(windowWidth, windowWidth);
  }

  hw = width/2;
  hh = height/2;
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  background(255);
  

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  
  ellipseMode(RADIUS);
  ellipse(xpos, ypos, rad, rad);
fill(255);
  ellipseMode(RADIUS);
  ellipse(xpos, ypos, rad-25, rad-25);
   fill(247,18,18);
   ellipseMode(CENTER);
  ellipse(xpos, ypos, rad-30, rad-30);
   fill(247,18,18);
  
textSize(40);
  text('Target', xpos-55, ypos+90,);
  
}
  