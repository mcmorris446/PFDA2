/*
    Paste the code for your week 5 exercise below.
*/
let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape to be later determined

let xspeed = 2.8; // Speed of the shape
let yspeed = 4.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom


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
  
  ellipseMode(RADIUS);
  ellipse(xpos, ypos, rad, rad);
  fill(255); // only effects circle identified with mode
  ellipseMode(RADIUS);
  ellipse(xpos, ypos, rad-25, rad-25);
   fill(247,18,18);
   ellipseMode(CENTER);
  ellipse(xpos, ypos, rad-30, rad-30);
   fill(247,18,18);
  
textSize(40);
  text('Target', xpos-55, ypos+90); //offset from center - place under symbols
  
  //crosshairs movement
   line(0, hh, width, hh);
  hh = hh - 5;
  line(hw, 0, hw, height);
  hw = hw - 4;
  
  if (hh < 0) { // return to center when edges reached
    hh = height;
    
  }
  if (hw < 0) { // return to center when edges reached
    hw = width;
    
  }
 
  
}
  