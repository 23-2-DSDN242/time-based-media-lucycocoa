// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {

  let height = 500/2.5
  let width = 960/6.5
  // YOUR MAIN CLOCK CODE GOES HERE
  background(30); //  beige
  // fill(200); // dark grey
  // textSize(40);
  // textAlign(CENTER, CENTER);
  // text("YOUR MAEDA CLOCK CODE GOES HERE", width/2, height/2);

  drawingContext.shadowOffsetX = 1;
  drawingContext.shadowOffsetY = -1;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'purple';

  fill('purple')///

  // let xarray = [20,50,80,110,140];

// ellipse(width+700,height+175,5,5)
  for (let i= 0; i <=height; i++){
  let yarray = i * 26
 
  rect(460,yarray+30,5,5)
  rect(480,yarray+30,5,5)
  rect(500,yarray+30,5,5)
  rect(520,yarray+30,5,5)
 
}
//how to loop xarrays

for (let ii= 0; ii <=height; ii++){
  let xarray = ii * 20
  rect(xarray,4,5,5)
  rect(xarray,30,5,5)
  rect(xarray,56,5,5)
  rect(xarray,82,5,5)
  rect(xarray,108,5,5)

}

  drawingContext.shadowOffsetX = 1;
  drawingContext.shadowOffsetY = -1;
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = 'white';

  noStroke()
  fill(255)
  
ellipse(width,height,15,15)
ellipse(width+15,height,15,15)
ellipse(width+15,height-15,15,15)
ellipse(width+15,height+15,15,15)
ellipse(width+15,height+30,15,15)
ellipse(width+15,height+45,15,15)
ellipse(width+15,height+60,15,15)
ellipse(width+15,height+75,15,15)
// 1

ellipse(width+45,height,15,15)
ellipse(width+60,height-15,15,15)
ellipse(width+75,height-15,15,15)
ellipse(width+90,height-15,15,15)
ellipse(width+105,height,15,15)
ellipse(width+105,height+15,15,15)
ellipse(width+90,height+30,15,15)
ellipse(width+75,height+45,15,15)
ellipse(width+60,height+60,15,15)
ellipse(width+45,height+75,15,15)
ellipse(width+60,height+75,15,15)
ellipse(width+75,height+75,15,15)
ellipse(width+90,height+75,15,15)
ellipse(width+105,height+75,15,15)
// 2

ellipse(width+165,height,15,15)
ellipse(width+165,height+60,15,15)
// :_1

ellipse(width+225,height-15,15,15)
ellipse(width+240,height-15,15,15)
ellipse(width+255,height-15,15,15)
ellipse(width+270,height-15,15,15)
ellipse(width+285,height-15,15,15)
ellipse(width+225,height,15,15)
ellipse(width+225,height+15,15,15)
ellipse(width+240,height+15,15,15)
ellipse(width+255,height+15,15,15)
ellipse(width+270,height+15,15,15)
ellipse(width+285,height+30,15,15)
ellipse(width+285,height+45,15,15)
ellipse(width+285,height+60,15,15)
ellipse(width+225,height+60,15,15)
ellipse(width+270,height+75,15,15)
ellipse(width+255,height+75,15,15)
ellipse(width+240,height+75,15,15)
//5

ellipse(width+315,height,15,15)
ellipse(width+330,height-15,15,15)
ellipse(width+345,height-15,15,15)
ellipse(width+360,height-15,15,15)
ellipse(width+375,height,15,15)
ellipse(width+375,height+15,15,15)
ellipse(width+375,height+30,15,15)
ellipse(width+375,height+45,15,15)
ellipse(width+375,height+60,15,15)
ellipse(width+360,height+75,15,15)
ellipse(width+345,height+75,15,15)
ellipse(width+330,height+75,15,15)
ellipse(width+315,height+60,15,15)
ellipse(width+315,height+45,15,15)
ellipse(width+315,height+30,15,15)
ellipse(width+315,height+15,15,15)
// 0

ellipse(width+435,height,15,15)
ellipse(width+435,height+60,15,15)
// :_2

ellipse(width+495,height,15,15)
ellipse(width+510,height-15,15,15)
ellipse(width+525,height-15,15,15)
ellipse(width+540,height-15,15,15)
ellipse(width+555,height,15,15)
ellipse(width+555,height+15,15,15)
ellipse(width+540,height+30,15,15)
ellipse(width+525,height+45,15,15)
ellipse(width+510,height+60,15,15)
ellipse(width+495,height+75,15,15)
ellipse(width+510,height+75,15,15)
ellipse(width+525,height+75,15,15)
ellipse(width+540,height+75,15,15)
ellipse(width+555,height+75,15,15)
// 2_s

ellipse(width+585,height-15,15,15)
ellipse(width+600,height-15,15,15)
ellipse(width+615,height-15,15,15)
ellipse(width+630,height-15,15,15)
ellipse(width+645,height-15,15,15)
ellipse(width+645,height,15,15)
ellipse(width+645,height+15,15,15)
ellipse(width+630,height+30,15,15)
ellipse(width+615,height+45,15,15)
ellipse(width+615,height+60,15,15)
ellipse(width+615,height+75,15,15)
// 7




}
