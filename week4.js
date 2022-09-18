/*
    Paste the code for your week 4 exercise below.
*/

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(255);
  // set target in center (text will be slightly off enter because of this)
   let midx = 250;
 let midy = 250;
  
 
  
// to make taget symbol

  ellipseMode(RADIUS);
fill(247,18,18);
ellipse(midx, midy, 50, 50); // Outer red ellipse
ellipseMode(CENTER);
fill(255);
ellipse(midx, midy, 60, 60 ); // Inner whiteellipse
  
  ellipseMode(CENTER);
fill(247,18,18);
ellipse(midx, midy, 30, 30);; // center red ellipse
  
// to make target text
textSize(40);
  fill(0,0,0)
  
text('Target', midx -55, midy +80)

  line(midx-55, midy+85, midx+55, midy+85); // to underline
  
  
}