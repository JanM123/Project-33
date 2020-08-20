const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
var turn = 0;

var ground, side1, side2;

var gameState;
var particle;

function setup() {

  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  gameState = "play";

  ground = new Ground(width/2,height,width,20);

  side1 = new Ground(0, 400, 10, 800);
  side2 = new Ground(480, 400, 10, 800);

  for(var a = 0; a <= width; a = a + 80) {
    divisions.push(new Divisions(a, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <=width; j = j + 50) {
    plinkos.push(new Plinko(j, 75, 10));
  }

  for(var j = 15; j <=width-10; j = j + 50) {
    plinkos.push(new Plinko(j, 175, 10));
  }

  for(var j = 40; j <=width; j = j + 50) {
    plinkos.push(new Plinko(j, 275, 10));
  }

  for(var j = 15; j <=width-10; j = j + 50) {
    plinkos.push(new Plinko(j, 375, 10));
  }

  

}
 
function draw() {

  background("black");

  ground.display();
  side1.display();
  side2.display();
  
  push();
  fill("yellow");
  textSize(20)
  text("Score : "+score,20,30);
  pop();

  textSize(20);
  text("100", 180, 570);
  text("100", 260, 570);
  text("200", 100, 570);
  text("200", 340, 570);
  text("500",  20, 570);
  text("500", 420, 570);

  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {     
     plinkos[i].display();    
   }

   for (var k = 0; k < divisions.length; k++) {    
     divisions[k].display();
   }

  if(particle!=null) {

    particle.display();

    if(particle.body.position.y > 750) {

      if(particle.body.position.x < 80) {

        score = score + 500;
        particle = null;

      } else if(particle.body.position.x > 81 && particle.body.position.x < 160) {

        score = score + 200;
        particle = null;

      } else if(particle.body.position.x > 161 && particle.body.position.x < 240) {

        score = score + 100;
        particle = null;

      } else if(particle.body.position.x > 241 && particle.body.position.x < 320) {

        score = score + 100;
        particle = null;

      } else if(particle.body.position.x > 321 && particle.body.position.x < 400) {

        score = score + 200;
        particle = null;

      } else if(particle.body.position.x > 401 && particle.body.position.x < 480) {

        score = score + 500;
        particle = null;

      }

    }

  }

  if(turn === 5 && particle === null) {

    gameState = "end";
    textSize(60);
    text("Game Over", 80, 320);

  }

  if(keyCode === 114 && gameState === "end" ) {

    gameState = "play";
    score = 0;
    turn = 0;
    particle != "null";

  }

  console.log(gameState);

  drawSprites();

}

function mouseClicked() {
  if(gameState!== "end"){
    turn++;
    particle = new Particle(mouseX, 10, 8);
  }
}