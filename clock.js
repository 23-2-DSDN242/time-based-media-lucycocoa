/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

let Xmove =1
let Ymove = 1
let Xdirection =1
let Ydirection =1


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
  let darkblue = color(7,55,99)
  let deepYellow = color(245,174,101)
  let lemon = color(255,236,177)
  let skyBlue = color(159,197,232)

 

  let hoursForLerp = map(obj.hours, 0,23,0,1)

  let colorL =lerpColor(black, darkblue, hoursForLerp);


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


  background(colorL);////////// Background lerp colour
 


  if(obj.seconds_until_alarm < 0){
  
   
  drawingContext.shadowBlur = 500;
  drawingContext.shadowColor = 'white';
  
  }else if
   (obj.seconds_until_alarm > 0){
  
    let bluram =map(obj.millis,0,2000,50,500)
      drawingContext.shadowBlur = bluram
      

  }else {drawingContext.shadowBlur = 500;} ////alarm mode1


  Xmove =Xmove+1 *Xdirection
  Ymove =Ymove+1*Ydirection
  // Xmove =width/2
  // Ymove =height/2      /////  Fix 
  
  
  if (Xmove  < 0 || Xmove  > width - 100) {
    Xdirection = Xdirection*-1; 
  }
  
  if (Ymove  < 0 || Ymove  > height - 100) {
    Ydirection = Ydirection *-1;
  }
  
 


  let sizeStep =400;
  let howmanycircle = 20;
  let opacityAM = 20;

 let clockCL = color(223,223,223,opacityAM) 

  if(obj.hours >=4 && obj.hours <17){
    clockCL =  color(255,217,102,opacityAM+80)
  } else if(obj.hours >=17 && obj.hours<22){
    clockCL = color(159,197,232,20)
  } 
  
  
  noStroke()
  fill(clockCL)
  
  for(let i =0; i<howmanycircle; i++){
    ellipse(Xmove,Ymove,sizeStep+i)
 
  } 
  /// Clock color
  


  push();

  angleMode(DEGREES);
  translate(Xmove,Ymove)
  
  let secondsWithFraction   = obj.seconds + (obj.millis / 1000.0);
  let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 360, 0);

  rotate(secondBarWidthSmooth)
  fill('red')
  ellipse(0,117,20,20)
  // ellipse(0,207,20,20) //edge

  pop();
  /// Red circle rotating by seconds

 
 
 
  stroke(255)
  strokeWeight(3)
  
  noFill()
  
  ellipse(Xmove,Ymove, 400, 400)
  stroke(255)
  ellipse(Xmove,Ymove, 210, 210)
  ellipse(Xmove,Ymove, 200, 200)
  ellipse(Xmove,Ymove, 190, 190)
  strokeWeight(2)
  ellipse(Xmove,Ymove, 180, 180)
  ellipse(Xmove,Ymove, 170, 170)
  strokeWeight(1)
  ellipse(Xmove,Ymove, 160, 160)
  ellipse(Xmove,Ymove, 150, 150)
  ellipse(Xmove,Ymove, 140, 140)
  ellipse(Xmove,Ymove, 130, 130)
  
  stroke(colorL)
  strokeWeight(2)
  ellipse(Xmove,Ymove, 400, 300)
  ellipse(Xmove,Ymove, 390, 290)
  ellipse(Xmove,Ymove, 300, 400)
  ellipse(Xmove,Ymove, 290, 390)
  strokeWeight(1)
  ellipse(Xmove,Ymove, 380, 280)
  ellipse(Xmove,Ymove, 370, 270)
  ellipse(Xmove,Ymove, 280, 380)
  ellipse(Xmove,Ymove, 270, 370)
  strokeWeight(0.5)
  ellipse(Xmove,Ymove, 360, 260)
  ellipse(Xmove,Ymove, 260, 360)


  




 strokeWeight(3)
  
 push();

 

  noStroke()
  fill(255)
  translate(Xmove,Ymove) 

  translate(p5.Vector.fromAngle(obj.millis/ width*6,height/3))
  ellipse(0, 0, 10, 10);
  
/// white circle rotating by millseconds


   
 
  pop();



  fill(255)
  ellipse(Xmove,Ymove,10)
  

  angleMode(DEGREES)

  translate(Xmove,Ymove)
 

  drawingContext.shadowBlur = 0;
 
 ///////hour&minute bar start///////

  if(obj.seconds_until_alarm < 0){ 

  push();
  for(let i= 0; i<= 23; i++){

    if(i>0){rotate(360/12)}
    if(i==obj.hours){size=10;} else{size=1;}
    if(i==obj.hours){fill(colorL)}
  
  rect(-2.5,-200,size/2,size*10,20)
  }
  pop();

 push();
  for(let ii=0; ii<=59; ii++){

    if(ii>0){rotate(360/60)}
    if(ii==obj.minutes){sizee=9;} else{sizee=0;}
    if(ii==obj.minutes){fill(colorL)}
  rect(-2.5,-200,sizee/2,sizee*20,20) 
  }
  pop();
  
} else if(obj.seconds_until_alarm > 0){

  push();
  for(let i= 0; i<= 23; i++){

    if(i>0){rotate(360/12)}
    if(i==obj.hours){size=10;} else{size=1;}
    if(i==obj.hours){fill(colorL)}
  rect(-2.5,-200,size/2,size*10,20)
  }
  pop();

 push();
  for(let ii=0; ii<=59; ii++){

    if(ii>0){rotate(360/60)}
    if(ii==obj.minutes){sizee=9;} else{sizee=0;}
    if(ii==obj.minutes){fill(colorL)}
  rect(-2.5,-200,sizee/2,sizee*20,20) 
  

fill(255)

  ellipse(Xmove/2,Ymove/2,10,10)
  ellipse(Xmove/2.5,Ymove/2.5,10,10)
  ellipse(Xmove/4,Ymove/2,10,10)

  

  }
  pop();

 


} else {  ///if(obj.seconds_until_alarm == 0)
  
  push();

  for(let i= 0; i<= 23; i++){

    if(i>0){rotate(360/12)}
    if(i==obj.hours){size=10;} else{size=1;}
    if(i==obj.hours){fill(colorL)}
  rect(-2.5,-200,size/2,size*10,20)
  }
  pop();

 push();
  for(let ii=0; ii<=59; ii++){

    if(ii>0){rotate(360/60)}
    if(ii==obj.minutes){sizee=9;} else{sizee=0;}
    if(ii==obj.minutes){fill(colorL)} 
  rect(-2.5,-200,sizee/2,sizee*20,20) 
  }
  pop();
}




}
  