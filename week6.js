/*
    Paste the code for your week 6 exercise below.
*/
let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape to be later determined

let xspeed = 8.8; // Speed of the shape
let yspeed = 12.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom
let mystring = '"Hello There...Obi Wan? The council is watching"'
function setup() {
  stroke(25);
  if( windowWidth > windowHeight ){
    createCanvas(windowHeight, windowHeight);
  }else{
    createCanvas(windowWidth, windowWidth);
     
  }

  hw = width/2; // Note to self; Hw half width -cant remember 
  //who i saw use this but very logicall
  hh = height/2;
  

  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape (middle of screen)
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  background(255);
print ( mystring)  

  // Updates the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // use to set boundaries
  //if positive temparily speeds up process until icon shoots off
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // target circles plus text
  if (mouseIsPressed === true) {
  ellipseMode(RADIUS);
  ellipse(xpos, ypos, rad, rad);
  fill(247,18,18); // only effects circle identified with mode
  } else {
    ellipseMode(RADIUS);
  ellipse(xpos, ypos, rad, rad);
    fill(255)
  }
 

  ellipseMode(RADIUS);
  ellipse(xpos, ypos, rad-25, rad-25);
   fill(247,18,18);
   ellipseMode(CENTER);
  ellipse(xpos, ypos, rad-30, rad-30);
   fill(247,18,18);
  
textSize(40);
  text('Target', xpos-55, ypos+90); //offset from center - place under symbols
  
  //crosshairs movement
  // Move the mouse across the canvas

  line(mouseX, 0, mouseX, windowHeight); //moves a line on x axis with mouse
  line(0, mouseY, windowWidth, mouseY);// moves on y axis
 
  if (mouseIsPressed === true) {   // make text appear
    text( 'BANG', xpos/2, ypos/2);
    textSize(60);
     
 } else {
   text( 'BANG', xpos/0, ypos/0); // make text disappear
   textSize( 0)
}
 
}