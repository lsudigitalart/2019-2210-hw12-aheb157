function bees(x,y){

    this.x=x;
    this.y=y;
    this.r =200;
    this.xdir=2;
    
    
    
    
    this.begone=function(){
        this.r=this.r/2;
        // if (this.r ){
        //     fill(51);
        //     stroke(51);
        //     rect(this.x,this.y,this.r/2, this.r/2);}
        
    }
    this.shiftDown= function(){
        this.xdir *= -1;
        this.y += this.r;
    }
    
    this.move=function(){
        this.x=this.x+this.xdir;
    }
    
    
    this.show=function(){
    
    image (beeimg, this.x, this.y,this.r/2,this.r/2); 
    }}