class Ledge{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.ledge = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.ledge);
      }
      display(){
        var angle = this.ledge.angle;
        push();
        translate(this.ledge.position.x, this.ledge.position.y);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        rect(0,0,this.width, this.height);
        pop();
      }
}