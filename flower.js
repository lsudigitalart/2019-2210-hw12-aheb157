function flowerobj(){
    this.x=width/2;
    this.xdir=0;

    this.show=function(){

        image (flowerimg, this.x,height-200,200,200);
    }
    this.setDir= function(dir){
        this.xdir=dir;
    }
    this.move= function(dir){
        this.x += this.xdir*5;
    }
}
