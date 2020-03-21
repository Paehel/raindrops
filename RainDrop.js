class RainDrop extends BaseClass{
   constructor(x,y,width,height,angle){
     super(x,y,width,height,angle);
     Matter.Body.setAngle(this.body, angle);
   }   
    fall(speed){
    this.y +=speed;
}

}