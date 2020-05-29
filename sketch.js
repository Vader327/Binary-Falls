const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drop, drops, length;
var x, i, rand;

function setup(){
    drops = []

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

			rain();
}
function draw(){
    background(0);
		Engine.update(engine);
		engine.world.gravity.y = 0.5;
		for(i in drops) {
			drops[i].display();
		}
}

function rain(){	
	for(x = 0; x < 1000; x+=1){
		rand = round(random(0, 1));
		if(rand==0){
			drop = new Drop1();
			drops.push(drop);
		}
		if(rand==1){
			drop = new Drop2();
			drops.push(drop);
		}
	}
}