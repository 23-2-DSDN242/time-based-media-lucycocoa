/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  
  background(50); // dark grey





  let yellow = color(253,	201,	46)
  let black = color(0)
  

  let hoursForLerp = map(obj.hours, 0,23,0,1)
  let colorL = lerpColor(yellow,black,hoursForLerp)
  console.log(hoursForLerp)
  // I want to present at least 6 colours white,yellow,blue,pink,purple,black
  let bluram =map(obj.millis,0,1000,100,300)
  push();
  drawingContext.shadowOffsetX = 2;
  drawingContext.shadowOffsetY = -2;
  drawingContext.shadowBlur = bluram;
  drawingContext.shadowColor = 'white';
  background(0);
  noStroke(0)
  fill(colorL)
  ellipse(width / 2, height / 2, 300, 300);
  //Center clock

  pop();

  // let secondsWithFraction   = seconds + (millis / 1000.0);
  // let ellipsesmooth  = map(secondsWithFraction, 0, 60, 0, width*6)

  // angleMode(DEGREES)
  // push();
  // rotate(0);
  // fill(255)
  // rect(width/2,height-400,5,30)
  // rotate(5)
  // rect(width/2,height-400,5,30)
  // pop();
 


push();

  noStroke()
  fill(255)
  translate(width/2,height/2)
  // translate(p5.Vector.fromAngle(obj.seconds/ width*102,height/3))
  translate(p5.Vector.fromAngle(obj.millis/ width*6,height/3))
  // ellipse(0, 0, 30, 30);

  ellipse(0, 0, 10, 10);
  pop();

 
 
  fill(255)
ellipse(width/2,height/2,10)

push();  
angleMode(DEGREES)
  let hourHand =map(obj.hours,0,23,0,360)
  
  translate(width/2,height/2)

  for( let i=0; i<24; i++){


rotate(360/24)

rect(0,height-380,5,30)

  
  }
  pop();

  
//
}
