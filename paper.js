class paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2,
      
      
        }
        this.x=x;
        this.y=y;
        this.image=loadImage("paper.png")
      this.body = Matter.Bodies.circle(x,y,r/2,options);
      this.r = r
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      imageMode(CENTER);
      fill("white");
      image(this.image,pos.x, pos.y, this.r, this.r);
    }
  };