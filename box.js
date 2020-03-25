class Box {
  constructor(x, y) {
    var options = {
        'friction':2,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y,60,60, options);
    this.width = 60;
    this.height = 60;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("Brown");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
