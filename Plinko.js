class Plinko{

    constructor(x, y, radius) {

        var options = {
          'isStatic': true
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        World.add(world, this.body);
      }

      display(){
        var pos = this.body.position;

        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}