var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var kids,adults,elders,b1,b2,b3,slogan;
var database;
var bg,bg1,bg2,kidsimg,adultsimg,eldersimg,sloganImg,st;
var form, player, game;
function preload(){
  bg=loadImage("bg.jpg");
  bg1=loadImage("bg2.jpeg");
  bg2=loadImage("bg4.jpg");
  kidsimg=loadImage("kids yoga.jpg");
  adultsimg=loadImage("adults yoga.jpg");
  eldersimg=loadImage("elder yoga.jpg");
  sloganImg=loadImage("s.jpg");
  st=loadImage("start.png")
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  //game.getState();
  game.start();
}


function draw(){
  if(gameState===1){
    background(bg2);
    game.play();
  }
 else if(gameState===2){
     
   background(bg1);
 
 }
}
