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
  
  




  let yellow = color(253,	201,	46)
  let black = color(0)
  let white= color(255)
  let darkblue = color(7,55,99)
  let deepYellow = color(245,174,101)
  let lemon = color(255,233,170)
  let skyBlue = color(159,197,232)

  // let img = loadImage('BAR.png');

 // dark grey

  let hoursForLerp = map(obj.hours, 0,23,0,1)
  // let ZerotothreeLerp = map(obj.hours, 0,3,0,1)

  let colorL =lerpColor(black, darkblue, hoursForLerp);

  let BcolorL =lerpColor(black,white,hoursForLerp)
  background(0);
  
  if (obj.hours >= 0 && obj.hours < 3) {
    hoursForLerp = map(obj.hours, 0, 3, 0, 1);
    colorL = lerpColor(black, darkblue, hoursForLerp);
  } else if (obj.hours >= 3 && obj.hours < 6) {
    hoursForLerp = map(obj.hours, 3, 6, 0, 1);
    colorL = lerpColor(darkblue, skyBlue, hoursForLerp);}
    else if (obj.hours >= 6 && obj.hours < 9) {
      hoursForLerp = map(obj.hours, 6, 9, 0, 1);
      colorL = lerpColor(skyBlue, lemon, hoursForLerp);
    } else if (obj.hours >= 9 && obj.hours < 12) {
      hoursForLerp = map(obj.hours, 9, 12, 0, 1);
      colorL = lerpColor(lemon, yellow, hoursForLerp);
    } else if (obj.hours >= 12 && obj.hours < 15) {
      hoursForLerp = map(obj.hours, 12, 15, 0, 1);
      colorL = lerpColor(yellow, deepYellow, hoursForLerp);
    } else if (obj.hours >= 15 && obj.hours < 18) {
      hoursForLerp = map(obj.hours, 15, 18, 0, 1);
      colorL = lerpColor(deepYellow, skyBlue, hoursForLerp);
    } else if (obj.hours >= 18 && obj.hours < 21) {
      hoursForLerp = map(obj.hours, 18, 21, 0, 1);
      colorL = lerpColor(skyBlue, darkblue, hoursForLerp);
    } else if (obj.hours >= 21 && obj.hours < 24) {
      hoursForLerp = map(obj.hours, 21, 24, 0, 1);
      colorL = lerpColor(darkblue, black, hoursForLerp);}
  
  console.log(hoursForLerp)


  // I want to present at least 6 colours white,yellow,blue,pink,purple,black
  // let bluram =map(obj.millis,0,1000,100,300)
  
  // drawingContext.shadowOffsetX = 2;
  // drawingContext.shadowOffsetY = -2;
  drawingContext.shadowBlur = 100;
  // drawingContext.shadowBlur = bluram;
  drawingContext.shadowColor = 'white';
 
  
  noStroke(0)
  fill(colorL)
  ellipse(width / 2, height / 2, 300, 300);
  //Center clock



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

  for( let i=1; i<=24; i++){

    if(i==obj.hours){
      size = 10;
    }
    else{
      size = 5;
    }

rotate(360/12)

drawingContext.shadowBlur = 8;
// drawingContext.shadowBlur = bluram;
drawingContext.shadowColor = 'white';


rect(-2.5,-150,size,size*6)///5,30

}

for( let ii=0; ii<60; ii++){

  if(ii+1==obj.minutes){
    sizee = 5;
  }
  else{
    sizee = 1;
  }

rotate(360/60)

rect(-0.5,-150,sizee,sizee*20)///5,30
// rect(-0.5,-150,sizee,sizee*20)
// rect(-0.5,-150,sizee,sizee*20)
// rect(-0.5,-150,sizee,sizee*20)

}

pop();

console.log(obj.hours)


}




