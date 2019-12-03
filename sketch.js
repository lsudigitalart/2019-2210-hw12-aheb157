
var flower;
var bee=[];
var pollens=[];
var sound;
var beeimg;
var flowerimg;
var bg;
function preload(){

    sound = loadSound ("sound.mp3")
    beeimg = loadImage ("beesprite.png")
    flowerimg = loadImage ("flowersprite.png")
    bg = loadImage ("bgfinal.png")

}

function setup(){
    createCanvas(1000,1000);
    if(sound.isLoaded()){
        userStartAudio();
        sound.play();
    flower = new flowerobj();
    
    for(var i =0; i<6; i++){
    bee[i]= new bees(i*80+80,60);
}}}

function draw(){
    image (bg,0,0,1000,1000);
flower.show();
flower.move();

for(var i = 0; i< pollens.length; i++){
    pollens[i].show();
    pollens[i].move();
    for(var j =0; j< bee.length; j++){
       if(pollens[i].hits(bee[j])){
           bee[j].begone();
          
       }
    }

 }
var edge =false;

for(var i = 0; i < bee.length; i++){
    bee[i].show();
    bee[i].move();
    if (bee [i].x > width || bee[i].x < 0){
    edge = true;
}}
if (edge){
    for (var i =0; i<bee.length; i++){
        bee[i].shiftDown();

    }}
var stop = false;
for (var j =0; j<bee.length; j++){
    if(bee[j].x > 850){
        stop=true;}
        if (stop){
        textSize(100);
        stroke(255,0,0);
        text("BUUUZZZZ",200, height/2);
    }}
// for(var i =0; i<pollen.length; i++){
//  if (pollens[i].toDelete){
//     pollens.splice(i, 1);
    
 textSize(40);
fill(255,215,0);
noStroke();
text("Help the Bees collect Pollen.", 10, 30); 
text("Space to Fire---Left and Right arrows to move Flower", 10, 70);
}
function keyReleased(){
    if (key!=' '){
    flower.setDir(0);
    }
} 
var pollenobj;
function keyPressed (){
if (key===' '){
      pollenobj = new pollen (flower.x+100  , height-150);
    pollens.push(pollenobj);
}

if (keyCode==RIGHT_ARROW){
flower.setDir (1);
    } else if (keyCode==LEFT_ARROW){
        flower.setDir(-1);
     } }

    
