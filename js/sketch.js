var song;
var amp;
var bScene1 = false;
var Btext = true;
var ballA = 0;
var playing = false;
var cSwitch = 0;
var cSwitch2 = 0;
var changer = 0;
var varience = 80;
var mY1 = 0;
var mY2 = 0;
var mY3 = 0;
var mY4 = 0;
var mY5 = 0;
var mY6 = 0;
var mY7 = 0;
var mY8 = 0;
var rX; 
var rY;
var max_distance;
var bX = 0;
var cX = 0;
var gD = 10;
var grow = 75;
var text1 = "I have found my music tastes have always been heavily dependent on the lyrics of the music I listen to. I have always leaned more towards music that, I feel, actually has something to say. The songs that show me new perspectives, tell me stories, and evoke emotions are what I am drawn too. One of the songs I have always found evoked a lot of emotions for me is the song “29 #Stafford APTS” by Bon Iver. When I play it loud and close my eyes, it feels like the soundscape really just paints a picture in your head while it tells you a very specific and personal story that is layered behind thoughtful and complex lyrics."

var text2 = "As I have been looking into P5 for this project, I have learned you can make the code respond to different aspects of audio. Since his lyrics shroud the true story specifics, I thought it would be really interesting to not only shroud it through my own interpretations of the music, and what I believe it to be about, but adding another layer of computational interpretation as well, as the code will have to interpret the music visually."

var text3 = "As for if my interpretation is correct or incorrect, I think matters very little, as it is fairly subjective. However I think it would be an interesting experiment to intentionally cloud and muddle an already poetically shrouded song. I will create several scenes through adaptive code, and using that song as an input, visually represent to the best of my abilities, how the song makes me feel and see if it is replicated in others, or if it will just get more muddled, like an interpretive game of telephone. Thank you for watching. Click anywhere if you would like to restart."




function preload(){
    song = loadSound('assets/bonhiver.mp3');
    

    
}



function setup() {
//slider = createSlider(0, 1, 1, 0.01);
  createCanvas(windowWidth, windowHeight);
  amp = new p5.Amplitude();
  background(255);
  rectMode(CORNER);
  rX = 0 - (windowWidth/2);
  rY = 0 - (windowHeight/2);
  var max_distance = dist(0, 0, windowWidth, windowHeight);
}


//function keyPressed(){
        //var len = song.duration();
        //song.jump(235);
    
//}



function draw() {
    
   textAlign(CENTER);
    if(playing == false && Btext == true){
      textSize(50);
      text('A Visual Interpretation of', windowWidth/2, windowHeight/2-200);
        
      textSize(100);
        text('29 #Strafford APTS', windowWidth/2, windowHeight/2 - 100);
        
      textSize(50);
        text('by Bon Iver', windowWidth/2, windowHeight/2 - 35);
        
    textSize(50);
      text('Code by Joel Hockin', windowWidth/2, windowHeight/2 +30);
        
         textSize(25);
      text('Click once to start, no further clicking will be necessary.', windowWidth/2, windowHeight/2 + 200);
        text('But you are encouraged to paint and play along.', windowWidth/2, windowHeight/2 + 240);
    }
  
  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 40, 200);
  var diam2 = map(vol, 0, 0.3, 50, 900);
  var Col1 = map(vol, 0, 0.5, 100, 255);
  var upDown = map(vol,0, 0.3, -75, 75);
  var sWeight = map(vol, 0, 0.3, 5, 20);
  var rHeight1 = map(vol, 0, 0.3, 300, 400);
  var rHeight2 = map(vol, 0, 0.3, 300, 600);
  var rHeight3 = map(vol, 0, 0.3, 300, 800);
  var rHeight4 = map(vol, 0, 0.3, 300, 1000);
  var rHeight5 = map(vol, 0, 0.3, 300, 1200);
  var rHeight6 = map(vol, 0, 0.3, 300, 1400);
  var bDist = map(vol, 0, 0.3, 10, 350);
  var xDist = dist(mouseX, mouseY, windowWidth/2, windowHeight/2);
  var Ball1X = map(xDist, 0, windowWidth/2, windowWidth/2, 0);
  var Ball1Y = map(xDist, 0, windowWidth/2, windowHeight/2, 0);
  var Ball2X = map(xDist, 0, windowWidth/2, windowWidth/2, windowWidth);
  var Ball2Y = map(xDist, 0, windowWidth/2, windowHeight/2, 0);
  var Ball3X = map(xDist, 0, windowWidth/2, windowWidth/2, windowWidth);
  var Ball3Y = map(xDist, 0, windowWidth/2, windowHeight/2, windowHeight );
  var Ball4X = map(xDist, 0, windowWidth/2, windowWidth/2, 0);
  var Ball4Y = map(xDist, 0, windowWidth/2, windowHeight/2, windowHeight);
  var mouseColor1 = map(mouseX, 0, windowWidth, 0, 255);
  var mouseColor2 = map(mouseX, 0, windowWidth, 255, 0);
  var rMouseX = map(mouseX, 0, windowWidth, -100, 100);
  var rMouseY = map(mouseY, 0, windowHeight, -100, 100);
print(song.currentTime());
    
  
    
    
    //Scene displayer
    
    //Scene 1
    if(song.currentTime() > 0 && song.currentTime() < 15){
        
      noFill();
      stroke(0,  random(50, Col1), random(50, Col1), ballA-50 );
      strokeWeight(sWeight);
      ellipse(width / 2, height / 2, diam2, diam2);
        
      noStroke();
      fill(random(50, Col1), 0, random(50, Col1), ballA-100);
      ellipse(pmouseX, pmouseY, diam, diam);   
        
      fill(random(50, Col1), 0, random(50, Col1), ballA-150);
      ellipse((-1 * pmouseX + width), pmouseY, diam, diam);   
      ballA = ballA + 0.3;
    }  
    
    
    //Scene 2
    if(song.currentTime() > 15 && song.currentTime() < 25){
        
      noFill();
      stroke(0,  random(50, Col1), random(50, Col1) );
      strokeWeight(sWeight);
      ellipse(width / 2, height / 2, diam2, diam2);
        
      noStroke();
      fill(random(50 - cSwitch2, (Col1 - cSwitch)), random(cSwitch2, (Col1 + cSwitch)), random(50, Col1));
      ellipse(pmouseX, pmouseY, diam, diam);   
        
      fill(random(50, Col1), random(cSwitch2, (Col1 + cSwitch)), random(50 - cSwitch2, (Col1 - cSwitch)));
      ellipse((-1 * pmouseX + width), pmouseY, diam, diam); 
     
        
     //Switch the color  
        
    if(cSwitch < 255){
      cSwitch = cSwitch + 0.5;
    }
    if(cSwitch2 < 50){
      cSwitch2 = cSwitch2 + 0.5;
    }
   
  }
    
    
    
    //Scene 3
    if(song.currentTime() > 25 && song.currentTime() < 40){
      rectMode(CORNER);
        
      noFill();
      stroke(0,  random(50, Col1), random(50, Col1) );
      strokeWeight(sWeight), ballA+50;
      ellipse(width / 2, height / 2, diam2, diam2);
        
      noStroke();
      fill(random(50 - cSwitch2, (Col1 - cSwitch)), random(cSwitch2, (Col1 + cSwitch)), random(50, Col1), ballA + 150);
      ellipse(pmouseX, pmouseY, diam, diam);   
        
      fill(random(50, Col1), random(cSwitch2, (Col1 + cSwitch)), random(50 - cSwitch2, (Col1 - cSwitch)), ballA + 150);
      ellipse((-1 * pmouseX + width), pmouseY, diam, diam); 
     
      ballA = ballA - 0.7;  
    
  }
    
   
    
    
    
    
    if(song.currentTime() > 35 && song.currentTime() < 55){         
      noStroke();
      background(255, 255, 255, 50);
        
      rectMode(CENTER);
       
      push();
      fill(mouseColor1+50, mouseColor2 + 50, 0);
      rect((windowWidth/8) - (windowWidth/16), windowHeight, windowWidth/8, rHeight3 + mY1, 100, 100, 0, 0); 
        
    if(mouseX > (windowWidth/8 * 1) - (windowWidth/8) * 1 && mouseX < (windowWidth/8) +50 && mY1 < (-1 * mouseY + windowHeight)){
        mY1 = mY1 +10;
    } else if( mY1 > 0){
        mY1 = mY1 - 10;
    }
        
        
        
      fill(mouseColor2+50, mouseColor1 + 50, 0);
      rect((windowWidth/8) * 2 - (windowWidth/16), windowHeight, windowWidth/8, rHeight3 + mY2, 100, 100, 0, 0); 
        
    if(mouseX > (windowWidth/8) * 2 - (windowWidth/8) && mouseX < (windowWidth/8 * 2) + (windowWidth/16) && mY2 < (-1 * mouseY + windowHeight)){
        mY2 = mY2 +10;
    } else if( mY2 > 0){
        mY2 = mY2 - 10;
    }
        

        
        
      fill(mouseColor1+50, mouseColor2 + 50, 0);
      rect((windowWidth/8) * 3 - (windowWidth/16), windowHeight, windowWidth/8, rHeight3 + mY3, 100, 100, 0, 0); 
        
    if(mouseX > (windowWidth/8) * 3 - (windowWidth/8) && mouseX < (windowWidth/8 * 3) + (windowWidth/16) && mY3 < (-1 * mouseY + windowHeight)){
        mY3 = mY3 +10;
    } else if( mY3 > 0){
        mY3 = mY3 - 10;
    }
        
        
     fill(mouseColor2+50, mouseColor1 + 50, 0);
      rect((windowWidth/8) * 4 - (windowWidth/16), windowHeight, windowWidth/8, rHeight3 + mY4, 100, 100, 0, 0); 
        
    if(mouseX > (windowWidth/8) * 4 - (windowWidth/8) && mouseX < (windowWidth/8 * 4) + (windowWidth/16) && mY4 < (-1 * mouseY + windowHeight)){
        mY4 = mY4 +10;
    } else if( mY4 > 0){
        mY4 = mY4 - 10;
    }
        
        
        
        
        
      fill(mouseColor1+50, mouseColor2 + 50, 0);
      rect((windowWidth/8) * 5 - (windowWidth/16), windowHeight, windowWidth/8, rHeight3 + mY5, 100, 100, 0, 0); 
        
    if(mouseX > (windowWidth/8) * 5 - (windowWidth/8) && mouseX < (windowWidth/8 * 5) + (windowWidth/16) && mY5 < (-1 * mouseY + windowHeight)){
        mY5= mY5 +10;
    } else if( mY5 > 0){
        mY5 = mY5 - 10;
    }   
        
        
        
      fill(mouseColor2+50, mouseColor1 + 50, 0);
      rect((windowWidth/8) * 6 - (windowWidth/16), windowHeight, windowWidth/8, rHeight3 + mY6, 100, 100, 0, 0); 
        
    if(mouseX > (windowWidth/8) * 6 - (windowWidth/8) && mouseX < (windowWidth/8 * 6) + (windowWidth/16) && mY6 < (-1 * mouseY + windowHeight)){
        mY6= mY6 +10;
    } else if( mY6 > 0){
        mY6 = mY6 - 10;
    }
           
        
        
        
      fill(mouseColor1+50, mouseColor2 + 50, 0);
      rect((windowWidth/8) * 7 - (windowWidth/16), windowHeight, windowWidth/8, rHeight3 + mY7, 100, 100, 0, 0); 
        
    if(mouseX > (windowWidth/8) * 7 - (windowWidth/8) && mouseX < (windowWidth/8 * 7) + (windowWidth/16) && mY7 < (-1 * mouseY + windowHeight)){
        mY7= mY7 +10;
    } else if( mY7 > 0){
        mY7 = mY7 - 10;
    } 
        
           
        
        
        
      fill(mouseColor2+50, mouseColor1 + 50, 0);
      rect((windowWidth/8) * 8 - (windowWidth/16), windowHeight, windowWidth/8, rHeight3 + mY8, 100, 100, 0, 0); 
        
    if(mouseX > (windowWidth/8) * 8 - (windowWidth/8) && mouseX < (windowWidth/8 * 8) + (windowWidth/16) && mY8 < (-1 * mouseY + windowHeight)){
        mY8= mY8 +10;
    } else if( mY8 > 0){
        mY8 = mY8 - 10;
    }
        
        
  
    pop();
     
        rectMode(CORNER);
    
    
    }
    
    
    
    
   
    
    //Scene4
    
    if(song.currentTime() > 25 && song.currentTime() < 42 ){
       
        
      noFill();
      stroke(0,  random(50, Col1), random(50, Col1) );
      strokeWeight(sWeight), ballA;
      ellipse(width / 2, height / 2, (diam2 * random(0.9, 1.1))-varience, diam2 * random(0.9, 1.1) - varience);
        
        
      strokeWeight(sWeight), ballA;
      ellipse(width / 2, height / 2, diam2 * random(0.9, 1.1), diam2 * random(0.9, 1.1));
      
        
      strokeWeight(sWeight), ballA;
      ellipse(width / 2, height / 2, diam2 * random(0.9, 1.1) + varience, diam2 * random(0.9, 1.1) + varience);
        
 
   
        
    }
    
   
       
   
    
    
    
    //Scene 5
    
    if(song.currentTime() > 40 && song.currentTime() < 40.5){
      ballA = 0;  
}   
    
     if(song.currentTime() > 40 && song.currentTime() < 60){
       
        
      noFill();
      stroke(random(200, Col1), 165, 0 );
      strokeWeight(sWeight), ballA;
      ellipse(width / 2, height / 2, (diam2 * random(0.9, 1.1))-varience, diam2 * random(0.9, 1.1) - varience);
        
      stroke(random(200, Col1), 60, 0 ); 
      strokeWeight(sWeight), ballA;
      ellipse(width / 2, height / 2, diam2 * random(0.9, 1.1), diam2 * random(0.9, 1.1));
      
      stroke(random(200, Col1), 0, 0 );  
      strokeWeight(sWeight), ballA;
      ellipse(width / 2, height / 2, diam2 * random(0.9, 1.1) + varience, diam2 * random(0.9, 1.1) + varience);
         
      stroke(random(200, Col1), 200, 0, ballA );  
      strokeWeight(sWeight), ballA;
      ellipse(width / 2, height / 2, diam2 * random(0.9, 1.1) + varience, diam2 * random(0.9, 1.1) + varience);
        
         
      stroke(random(200, Col1), 165, 0, ballA );  
      strokeWeight(sWeight), ballA;
      ellipse(width / 2, height / 2, diam2 * random(0.9, 1.1) - varience, diam2 * random(0.9, 1.1) - varience);
        
      stroke(random(200, Col1), 135, 0 , ballA);  
      strokeWeight(sWeight), ballA;
      ellipse(width / 2, height / 2, diam2 * random(0.9, 1.1), diam2 * random(0.9, 1.1));
         
      ballA = ballA + 1;
         
    }
    
    
    

    if(song.currentTime() > 25 && song.currentTime() < 42){ 
      changer = changer +0.1;
      fill(255, 255,255, changer);
      rect(0, 0,windowWidth, windowHeight)  
   }
  
    
    
    
    //Scene Changer
     if(song.currentTime() > 51 && song.currentTime() < 52){
        changer = 0;
    }
    
    if(song.currentTime() > 53 && song.currentTime() < 62){
      rectMode(CORNER);
      changer = changer +1;
      fill(255, 255,255, changer);
      rect(0, 0,windowWidth, windowHeight)  
    }
    
    
    
    
   
    
    
    
    
    //Scene 7 *chorus*
    
    if(song.currentTime() > 56 && song.currentTime() < 85 ){
        
      noStroke();
      background(255, 255, 255, 50);
        
      rectMode(CENTER);
        
      fill('#231942');
      rect(0  + (windowWidth/24), windowHeight, windowWidth/12, rHeight1, 100, 100, 0, 0); 
        
      fill('#5E548E');
      rect(windowWidth/12 * 1  + (windowWidth/24), windowHeight, windowWidth/12, rHeight2, 100, 100, 0, 0); 
     
      fill('#9F86C0');
      rect(windowWidth/12 * 2  + (windowWidth/24), windowHeight, windowWidth/12, rHeight3, 100, 100, 0, 0); 
         
      fill('#BE95C4');
      rect(windowWidth/12 * 3 + (windowWidth/24), windowHeight, windowWidth/12, rHeight4, 100, 100, 0, 0);   
        
      fill('#E0B1CB');
      rect(windowWidth/12 * 4 + (windowWidth/24), windowHeight, windowWidth/12, rHeight5, 100, 100, 0, 0); 
        
      fill('#5E548E');
      rect(windowWidth/12 * 5 + (windowWidth/24), windowHeight, windowWidth/12, rHeight6, 100, 100, 0, 0); 
        
      fill('#8E7FD8');
      rect(windowWidth/12 * 6 + (windowWidth/24), windowHeight, windowWidth/12, rHeight6, 100, 100, 0, 0);
        
      fill('#BE95C4');
      rect(windowWidth/12 * 7 + (windowWidth/24), windowHeight, windowWidth/12, rHeight5, 100, 100, 0, 0); 
        
      fill('#231942');
      rect(windowWidth/12 * 8 + (windowWidth/24), windowHeight, windowWidth/12, rHeight4, 100, 100, 0, 0); 
        
      fill('#E0B1CB');
      rect(windowWidth/12 * 9 + (windowWidth/24), windowHeight, windowWidth/12, rHeight3, 100, 100, 0, 0); 
        
      fill('#614F96');
      rect(windowWidth/12 * 10 + (windowWidth/24), windowHeight, windowWidth/12, rHeight2, 100, 100, 0, 0); 
        
      fill('#5E548E');
      rect(windowWidth/12 * 11 + (windowWidth/24), windowHeight, windowWidth/12, rHeight1, 100, 100, 0, 0); 
        
        
    }
    
    
    
     //Scene 6
    if(song.currentTime() > 55 && song.currentTime() < 56){
      ballA = 0;  
}   
    if(song.currentTime() > 56 && song.currentTime() < 85 ){
      strokeWeight(sWeight/2);
      noFill();
      stroke(0,0, random(50, Col1), 100);
      ellipse((pmouseX - (bDist)), pmouseY, diam, diam); 
     
      stroke(random(50, Col1), 0, 0, ballA -10), 100;
      ellipse((pmouseX + (bDist)), pmouseY, diam, diam); 
     
      stroke(random(50, Col1),0, random(50, Col1), ballA -10), 100;
      ellipse((pmouseX), pmouseY, diam - 50, diam -50), 100; 
        
      ballA = ballA + 2;    
     
        
    }
    
    
    //Scene 8
    if(song.currentTime() > 85 && song.currentTime() < 86){
       ballA = 0;
       }
    
     if(song.currentTime() > 87 && song.currentTime() < 114){
        
        rectMode(CORNER);
        fill(255, 255,255, 10);
        rect(0, 0,windowWidth, windowHeight);  
        
        if(mouseX = windowWidth/2){
            stroke(random(255), random(255), random(255),ballA);
        }
        noFill();
        ellipse(Ball1X, Ball1Y, diam, diam);
        ellipse(Ball2X, Ball2Y, diam, diam);
        ellipse(Ball3X, Ball3Y, diam, diam);
        ellipse(Ball4X, Ball4Y, diam, diam);
        ellipse(mouseX, windowHeight/2, 100, 100);
        ellipse((-1 * pmouseX + width), windowHeight/2, 100, 100);
        ellipse(windowWidth/2, mouseY, 100, 100);
        ellipse(windowWidth/2, (-1 * mouseY + height), 100, 100);
        ballA = ballA + 2; 

    }
    
    
    
    //Scene 9 
    
    if(song.currentTime() > 114 && song.currentTime() < 143){
      noStroke();
      background(255, 255, 255, 50);
      angleMode(DEGREES);
      
      rectMode(CENTER);
      
      push();
      
      translate(windowWidth/2, windowHeight/2);
      scale(1);
      rotate(mouseX/5);
      fill(random(255),random(255),random(255));
      rect(0, 0, diam * 0.6 , rHeight6, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, diam * 0.6 , rHeight6, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, diam * 0.6 , rHeight6, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, diam * 0.6, rHeight6, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, diam * 0.6 , rHeight6, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, diam * 0.6, rHeight6, 100, 100, 100, 100);
      
      rotate(15);
      fill(255);
      rect(0, 0, 80, rHeight4, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 80, rHeight4, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 80, rHeight4, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 80, rHeight4, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 80, rHeight4, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 80, rHeight4, 100, 100, 100, 100);
        
      rotate(15);
      fill(mouseColor2, 0, mouseColor1);
      rect(0, 0, 60, rHeight2, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 60, rHeight2, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 60, rHeight2, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 60, rHeight2, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 60, rHeight2, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 60, rHeight2, 100, 100, 100, 100);
        
      scale(0.5);
      rotate(15);
      fill(random(255), random(255),random(255));
      rect(0, 0, 100, rHeight6, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 100, rHeight6, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 100, rHeight6, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 100, rHeight6, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 100, rHeight6, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 100, rHeight6, 100, 100, 100, 100);
      
      rotate(15);
      fill(mouseColor2, 0, mouseColor1);
      rect(0, 0, diam*0.75, rHeight4, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, diam*0.75, rHeight4, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, diam*0.75, rHeight4, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, diam*0.75, rHeight4, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, diam*0.75, rHeight4, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, diam*0.75, rHeight4, 100, 100, 100, 100);
        
      rotate(15);
      fill(255);
      rect(0, 0, 60, rHeight2, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 60, rHeight2, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 60, rHeight2, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 60, rHeight2, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 60, rHeight2, 100, 100, 100, 100);
      rotate(30);
      rect(0, 0, 60, rHeight2, 100, 100, 100, 100);
      pop();

    }
    
    
    //Scene Changer4
     if(song.currentTime() > 130 && song.currentTime() < 131){
        changer = 0;
    }
    
    if(song.currentTime() > 131 && song.currentTime() < 143){
      rectMode(CORNER);
      changer = changer +1;
      fill(255, 255,255, changer);
      rect(0, 0,windowWidth, windowHeight)  
    }
    
    
     if(song.currentTime() > 131 && song.currentTime() < 143){
         
         rectMode(CENTER);
         fill(mouseColor1, 0, mouseColor2);
         rect(rX, windowHeight/2 , windowWidth + 100, windowHeight);
         
         if(rX < windowWidth/2){
         rX = rX + 20;
         }
         
     }
    
    
    if(song.currentTime() > 143 && song.currentTime() < 153){
       fill(255,0,0);
       ellipse(windowWidth/2 + rMouseX - 600, windowHeight/2 + rMouseY, 100, 100); 
        
        fill(0,0,255);
       ellipse(windowWidth/2 + rMouseX + 400, windowHeight/2 + rMouseY, 100, 100); 
        
        fill(200,0,200);
       ellipse(windowWidth/2 + rMouseX + 400, windowHeight/2 + rMouseY -100, 100, 100); 
        
    }
    
    
    
    if(song.currentTime() > 150 && song.currentTime() < 153){
         
         rectMode(CENTER);
         fill(mouseColor1, 0, mouseColor2);
         rect(windowWidth/2, rY , windowWidth, windowHeight + 100);
         
         if(rY < windowHeight/2){
         rY = rY + 20;
         }
         
     }
  
    
    
    
    
    
    //Scene Changer3
     if(song.currentTime() > 70 && song.currentTime() < 71){
        changer = 0;
    }
    
    if(song.currentTime() > 80 && song.currentTime() < 90){
      rectMode(CORNER);
      changer = changer +1;
      fill(255, 255,255, changer);
      rect(0, 0,windowWidth, windowHeight)  
    }
    
     
    if(song.currentTime() > 153 && song.currentTime() < 195){
        
        if(song.currentTime() > 165 && song.currentTime() < 200){
         rectMode(CORNER);
         fill(255, 255,255, 10);
         rect(0, 0,windowWidth, windowHeight);  
         noStroke();
         fill(0, 0, 255);
         ellipse(cX - 120, windowHeight/2 + upDown, 100, 100);
         if (cX <= 500){
         cX = cX + 1 ;
         }
        }
            
         if(song.currentTime() > 165 && song.currentTime() < 195){
         rectMode(CORNER);
         fill(255, 255,255, 10);
         rect(0, 0,windowWidth, windowHeight);  
         noStroke();
         fill(200, 0, 200);
         ellipse(cX - 300, windowHeight/2 + upDown, 75, 75);
         if (cX <= 500){
         cX = cX + 1 ;
         }
        }
        
        
        
        if(song.currentTime() > 180 && song.currentTime() < 181){
            changer = 0;
        }
        
        if(song.currentTime() > 182 && song.currentTime() < 195){
            fill(255, 255, 255, changer);
            rectMode(CENTER);
            changer = changer + 1;
            rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
        }
        
        
        
        if(song.currentTime() > 153 && song.currentTime() < 175){
        rectMode(CORNER);
        fill(255, 255,255, 10);
        rect(0, 0,windowWidth, windowHeight);  
        noStroke();
        fill(255, 0, 0);
        ellipse(bX - 120, windowHeight/2 + upDown, 100, 100);
        if (bX <= windowWidth - 200){
        bX = bX + 2 ;
        }
        }
        
        if(song.currentTime() > 175 && song.currentTime() < 210){
        rectMode(CORNER);
        fill(255, 255,255, 10);
        rect(0, 0,windowWidth, windowHeight);  
        noStroke();
        fill(255, 0, 0);
        ellipse(bX - 120, windowHeight/2 + upDown, 100, 100);
        if(bX > windowWidth/2 + 120)
        bX = bX -1 ;
        }
   }

    
    if(song.currentTime() > 195 && song.currentTime() < 205){
        fill(255,0,0);
        ellipse(windowWidth/2, windowHeight/2 +upDown ,grow, grow);
        grow = grow + 2;
    }
    
    
    if(song.currentTime() > 198 && song.currentTime() < 199){
            changer = 0;
        }
        
        if(song.currentTime() > 200 && song.currentTime() < 206){
            fill(255, 255, 255, changer);
            rectMode(CENTER);
            changer = changer + 1;
            rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
        
        }
    
    
    if(song.currentTime() > 206 && song.currentTime() < 220){
        rectMode(CORNER);
        fill(255, 255,255, 10);
        rect(0, 0,windowWidth, windowHeight); 
        fill(random(255),0, gD)
        ellipse(random(0, windowWidth), random(0, windowHeight), gD, gD);
        gD = gD + 0.5;
        
        }
    
     if(song.currentTime() > 220 && song.currentTime() < 235){
        rectMode(CORNER);
        fill(255, 255,255, 10);
        rect(0, 0,windowWidth, windowHeight); 
        fill(random(255),0, random(255));
        ellipse(random(0, windowWidth), random(0, windowHeight), gD, gD);
        gD = gD + 1.5;
        
        }
    
    
    if(song.currentTime() > 229 && song.currentTime() < 230){
            changer = 0;
        }
        
        if(song.currentTime() > 231 && song.currentTime() < 245){
            fill(255, 255, 255, changer);
            rectMode(CENTER);
            changer = changer + 1;
            rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
        }
    
    if (song.currentTime() > 240 && song.currentTime() > 245){
        rectMode(CORNER);
        textAlign(LEFT);
        fill(0);
        textSize(24);
        
        text(text1, windowWidth/4, windowHeight/8 - 20, windowWidth/4 * 2,windowHeight/8 * 3 );
    
        text(text2, windowWidth/4, windowHeight/8 * 3, windowWidth/4 * 2);
    
        text(text3, windowWidth/4, windowHeight/8 * 4 + 50, windowWidth/4 * 2);
        rectMode(CENTER);
        
        playing = false;
        
    }
  
 
    
}


 // Play Function
function mouseClicked(){
 if (playing == false){
     background(255);
     Btext = false;
  playing = true;
  song.play();
 }
}

