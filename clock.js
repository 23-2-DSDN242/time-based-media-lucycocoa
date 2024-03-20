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
  let white= color(255)
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
  
  //console.log(hoursForLerp)


  background(colorL);//////Background lerp colour
 


  if(obj.seconds_until_alarm < 0){
  
   
  drawingContext.shadowBlur = 500;
  drawingContext.shadowColor = 'white';
  
  }else if
   (obj.seconds_until_alarm > 0){
    //alarm
    let bluram =map(obj.millis,0,2000,50,500)
      drawingContext.shadowBlur = bluram

  }else {drawingContext.shadowBlur = 500;}


  Xmove =Xmove+1 *Xdirection
  Ymove =Ymove+1*Ydirection
  // Xmove =width/2
  // Ymove =height/2
  
  
  if (Xmove  < 0 || Xmove  > width - 100) {
    Xdirection = Xdirection*-1; 
  }
  
  if (Ymove  < 0 || Ymove  > height - 100) {
    Ydirection = Ydirection *-1;
  }
  
  let sizeStep =400;
  let howmanycircle = 50;
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
 
  } //////////////////////////////background moving circle
  


  

 
 
  // drawingContext.shadowBlur = 0;
  // drawingContext.shadowColor = 'white';
 
  stroke(255)
  strokeWeight(5)
  noFill()
  
  ellipse(Xmove,Ymove, 400, 400); ///////ellipse Draw on the moving circle
  //Center clock




  
 push();

 

  noStroke()
  fill(255)
  translate(Xmove,Ymove) ////Draw on the moving circle
  // translate(width/2,height/2)
  
  // translate(p5.Vector.fromAngle(obj.seconds/ width*102,height/3))
  translate(p5.Vector.fromAngle(obj.millis/ width*6,height/3))
  // ellipse(0, 0, 30, 30);

  ellipse(0, 0, 10, 10);

  //alarm
//   translate(p5.Vector.fromAngle(obj.millis* width*6,height/3))
//   // ellipse(0, 0, 30, 30);
// fill('red')
//   ellipse(0, 0, 30, 30);



  // translate(p5.Vector.fromAngle(obj.millis/ width*6+30,height/3+10))
  // fill('red')
  // ellipse(0, 0, 20, 20);

  // translate(p5.Vector.fromAngle(-obj.millis/ width*6+30,height/3+10))
  // fill('blue')
  // ellipse(0, 0, 15, 15);
  // translate(p5.Vector.fromAngle(obj.millis/ width*6,height/3))
  // fill('red')
  // ellipse(0, 0, 20, 20);

  // translate(p5.Vector.fromAngle(-obj.millis/ width*6,height/3))
  // fill('blue')
  // ellipse(0, 0, 15, 15);


  // translate(p5.Vector.fromAngle(obj.millis/ width*6,height/3))
  // fill('green')
  // ellipse(0, 0, 20, 20);
  
  
  pop();

/////////////////////// ////center ellipse


////////////////////////HAND 
if(obj.seconds_until_alarm < 0){////////////ellipse alarm 
 
fill(255)
ellipse(Xmove,Ymove,10)


let SIZE =map(obj.millis,0,999,30,0)

push();  
angleMode(DEGREES)
 
  
  translate(Xmove,Ymove)

  for( let i=0; i<=23; i++){

    rotate(360/12)
    if(i==obj.hours){
      size = 10;
    }
    else{
      size = 5;
    }
    

drawingContext.shadowBlur = 8;
drawingContext.shadowColor = 'white';



noStroke()
// rect(-2.5,-150,size,size*6)//original
rect(-2.5,-200,size,size*6)
rect(-2.5,-200,size,size*6)
rect(-2.5,-200,size,size*6)
rect(-2.5,-200,size,size*6)
///Hourhand

}



for( let ii=0; ii<60; ii++){

  if(ii+1==obj.minutes){
    sizee = 5;
  }
  else{
    sizee = 1;
  }


    rotate(360/60)

rect(-0.5,-200,sizee,sizee*20)///5,30 mc
rect(-0.5,-200,sizee,sizee*20)
rect(-0.5,-200,sizee,sizee*20)
rect(-0.5,-200,sizee,sizee*20)
///minutehand

} 

}else if(obj.seconds_until_alarm > 0){
  fill(255)
ellipse(Xmove,Ymove,10)


// let SIZE =map(obj.millis,0,999,0,30)

push();  
angleMode(DEGREES)
 
  
  translate(Xmove,Ymove)

  for( let i=0; i<=23; i++){

    rotate(360/12)
    if(i+1==obj.hours){
      size = 10;
    }
    else{
      size = 5;
    }

drawingContext.shadowBlur = 8;
drawingContext.shadowColor = 'white';



noStroke()
// rect(-2.5,-150,size,size*6)//original
rect(-2.5,-200,size,size*6)
rect(-2.5,-200,size,size*6)
rect(-2.5,-200,size,size*6)
rect(-2.5,-200,size,size*6)
///Hourhand

}



for( let ii=0; ii<60; ii++){

  if(ii+1==obj.minutes){
    sizee = 5;
  }
  else{
    sizee = 1;
  }


    rotate(360/60)
     ellipse(Xmove/2,Ymove/2,10,10)
  ellipse(Xmove/2.5,Ymove/2.5,10,10)
  ellipse(Xmove/4,Ymove/2,10,10)

rect(-0.5,-200,sizee,sizee*20)///5,30 mc
rect(-0.5,-200,sizee,sizee*20)
rect(-0.5,-200,sizee,sizee*20)
rect(-0.5,-200,sizee,sizee*20)
}}
else{fill(255)
  ellipse(Xmove,Ymove,10)
  
  // ellipse(width/2,height/2,10)
  let SIZE =map(obj.millis,0,999,0,30)
  
  push();  
  angleMode(DEGREES)
   
    
    // translate(width/2,height/2)
    translate(Xmove,Ymove)
  
    for( let i=0; i<=23; i++){
  
      rotate(360/12)
      if(i+1==obj.hours){
        size = 10;
      }
      else{
        size = 5;
      }
  
  drawingContext.shadowBlur = 8;
  // drawingContext.shadowBlur = bluram;
  drawingContext.shadowColor = 'white';
  
  
  
  noStroke()
  // rect(-2.5,-150,size,size*6)//original
  rect(-2.5,-200,size,size*6)
  rect(-2.5,-200,size,size*6)
  rect(-2.5,-200,size,size*6)
  rect(-2.5,-200,size,size*6)
  ///Hourhand
  
  }
  
  
  
  for( let ii=0; ii<60; ii++){
  
    if(ii+1==obj.minutes){
      sizee = 5;
    }
    else{
      sizee = 1;
    }
  
  
      rotate(360/60)
  
  rect(-0.5,-200,sizee,sizee*20)///5,30 mc
  rect(-0.5,-200,sizee,sizee*20)
  rect(-0.5,-200,sizee,sizee*20)
  rect(-0.5,-200,sizee,sizee*20)
  
  } }

// rect(-0.5,-150,sizee,sizee*20) //original
// rect(-0.5,-150,sizee,sizee*20)
// rect(-0.5,-150,sizee,sizee*20)




  
  //     rotate(360/60)
  // ellipse(Xmove/2,Ymove/2,10,10)
  // ellipse(Xmove/2.5,Ymove/2.5,10,10)
  // ellipse(Xmove/4,Ymove/2,10,10)
  // rect(-0.5,-200,sizee,sizee*20)///5,30 mc
  // rect(-0.5,-200,sizee,sizee*20)
  // rect(-0.5,-200,sizee,sizee*20)
  // rect(-0.5,-200,sizee,sizee*20)
}
  


pop();


console.log(obj.seconds_until_alarm)



  





