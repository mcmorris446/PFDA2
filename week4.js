/*
    Paste the code for your week 4 exercise below.
*/

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(255);
   let midx = 250;
 let midy = 250;
  
 
  
// Example showing RADIUS and CENTER ellipsemode with 2 overlaying ellipses

  ellipseMode(RADIUS);
fill(247,18,18);
ellipse(midx, midy, 50, 50); // Outer white ellipse
ellipseMode(CENTER);
fill(255);
ellipse(midx, midy, 60, 60 ); // Inner gray ellipse
  
  ellipseMode(CENTER);
fill(247,18,18);
ellipse(midx, midy, 30, 30);; // Inner gray ellipse
  
textSize(40);
  fill(0,0,0)
  
text('Target', midx -55, midy +80)

  line(midx-55, midy+85, midx+55, midy+85);
  
  
}