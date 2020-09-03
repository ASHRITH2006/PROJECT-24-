class Paper{
    constructor(x, y,r) {
        var options = {
            'isStatic': false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(0,0,this.r,this.r);
        ellipseMode(CENTER);
        pop();
      }
}