## MDDN 242 Project 1: Time-based Media  

### THIS IS YOUR README

# Sketch/Intention

My design is based on the circadian cycle, representing time through the intensity and colour of light. To match our body's natural rhythms, smoothly shifting from bright, energizing colours in the morning to soothing, mellow tones as night falls.
A clock that changes colors according to the time of day would effectively convey visual information. By simply observing the colors, users would be able to rougly guess the time, making it easy for them. 

# Maeda Clock

I have recreated one of Maeda's clocks, particularly choosing the one positioned in the middle. This iteration features numerical displays for hours, minutes and seconds along with randomly moving particles to infuse visual interest.
I haven't coded in about six months, so I found myself needing to recall the basics of coding to recreate this iteration. First, I used 'let' to established the initial x and y coordinated for the first ellipse. Then, I proceeded to draw the numbers, ensuring they were sized appropriately to fit within the confines of each ellipse.
During my exploration of the p5.js reference, I came across a shadow effect that caught my attention. Recognizing its potential to enhance the visual effect of my sketches, particularly in simulating lighting effects. By using this code, I was able to achieve a radiant, luminous effect on the featured ellipses.
![preview](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/47a69aee-3cdb-4b00-b29b-eeaea655fcf0)



# Original Clock

### drawing shadow_
I use the [drawingContect.shadow function](https://p5js.org/reference/#/p5/drawingContext) and set the shadow colour to white and increased the blur value to give a glowing effect as I planned.
![preview (1)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/1630d5dd-f945-41ae-8bad-587b3cfd8583)



### an ellipse rotating by millis_
I used the code translate(p5.Vector.fromAngle(obj.millis / width * 6, height / 3)) to make small circles rotate around the main clock. This code converts the current milliseconds value into an angle to move the circles rapidly. Now I know that achieving the effect using map and rotate is possible, but at the time, I struggled too much with creating this effect, so I decided to stick with this code. Initially, I intended to make the small circles rotate around the main clock according to seconds, but I found that the effect of moving rapidly based on milliseconds was more appealing, so I kept it.
![preview (2)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/ad086873-c937-42dd-937e-b899afe36de2)

### rotate bar_
I thought about how to represent the hours and minutes effectively, and I decided to create a design inspired by an analog clock to fill the empty space of the main clock. In order to achieve this, I used a for loop to make the hour and minute hands rotate 360 degrees based on the hour and minute values, changing in size to indicate the time.
![preview (3)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/0d40e7d8-aa2e-4165-9ee8-1532dac46800)
![preview (4)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/774e86f0-c862-479c-ac10-3b56bcf5adec)


### Lerpcolor_
I achieved the functionality of changing the colour of the clock based on the time using "if' and 'else if' statements. I divided the entire 24 hours into 8 intervals of 3 hours each, and chose appropriate colours (black, darkblue, skyblue, lemon, yellow, deepyellow and back to skyblue, darkblue)for each section. This allowed me to represent the clock with varioue colours that allign with each time intervals, as per my initial idea.

### bacground circle_
I felt that the design of my clock was too simple and looked boring, so I wanted to add something more special to it. In conclusion, I initially attempted to give the background a moving gradient effect,[(this is a link I got inspired)](https://www.youtube.com/watch?v=D6EiRSRhsbQ) but it didn't turn out as I wanted. Instead, I decided to create a large moving circle as the background and added shadows to it. When multiple circles overlapped, the result turned out to be very satisfying and I really like it.
![preview (5)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/38d644c0-9522-4889-83c2-7cef65ec82ab)
![preview (6)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/39fbff8e-31b0-4f32-a7ad-07ccf1ea4692)



### Clock design alteration_
I found that the moving circle behind the clock was more eye-catching than the clock itself, which was little bit bothering me. So I decided to move the clock on the moving circle, thinking it would look better. I also adjusted the color of the circle change to match the backgroung color and I made it change 3 colors. (yellow=mornig,afternoom/blue=evening/grey=night) Additionally, I adjusted the opacity to make the brightness strongest during the yellow circle.
![preview (9)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/936c0017-51f6-4a70-91a6-1a176f493566)
![preview (10)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/f2983e72-6c6b-40ed-aa09-516361acc72e)

morning![preview (26)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/9833c0ae-7c49-4907-99f3-1d7d8175073b)

evening![preview (27)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/d05349e4-c016-4f26-8d2e-3ace95d95410)

night![preview (28)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/4c97d05f-7751-49ec-b739-84e3556375d1)

# Clock Alarm_/
I applied and effect where a white shadow behind the moving circle in alarm mode, blinking based on milliseconds. However, when debugging, I noticed an issue where the shadow behind the circle was shrinking to a smaller size than the original size.
![preview (13)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/41658071-0417-4a42-b053-bfa6ff9b8325)
![preview (14)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/7dde598f-4f7d-4359-a247-e7dffd04328e)

It turns out there was an extra shadow applied to another ellipse, which was causing this error. Once I removed it, everything worked fine.

Somehow, I found a really cool effect by accident. I placed the ellipse, which is set with Xmove and Ymove, under the rotation function, and I got this! 
![preview (16)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/14d973c2-7409-4711-b94e-4cbd442e29f6)
![preview (17)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/12323a75-5d34-4f76-b781-e4600594bc3a)

