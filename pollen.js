function pollen(x,y){

    this.x= x;
    this.y= y;
    this.r=5;



    this.show=function(){
    fill(250,215,200);
    noStroke();
    ellipse(this.x, this.y,this.r*2,this.r*2); }
    
  


    this.hits=function (bee){
        var d=dist(this.x,this.y,bee.x,bee.y);
     if (d<this.r + bee.r){
         return true;
     }else {
         return false;
     }
    }

    this.move = function(){
        this.y=this.y- 5}}