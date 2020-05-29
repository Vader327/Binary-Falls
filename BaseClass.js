class BaseClass{
    constructor() {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(random(15,1185), random(-3000,-170), 19, 29, options);
        this.image = loadImage("zero.png");
        this.image;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 19, 29);
        pop();
      }
}