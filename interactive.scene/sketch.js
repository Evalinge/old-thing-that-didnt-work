// Interactive Scene
// Evalina Maille
// 9/19/2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xposition=0;
let yposition=0;
let xspeed=0;
let yspeed=0;
let side=25;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  
 moveSquare();
  
  //drawing a coloured circle
  fill("magenta");
  square(xposition, yposition, side)
  
}

function showCharacter(){
  square(xposition, yposition, side);
}

function moveSquare(){
  while (keyIsPressed === true){
     if(keyIsDown(87)){
       yspeed = 2;
         }
    if (keyIsDown(83)){
      yspeed = -2;
    }
    if (keyIsDown(65)){
      xspeed = -2;
    }
    if (keyIsDown(68)){
      xspeed = 2;
    }
  }
}

