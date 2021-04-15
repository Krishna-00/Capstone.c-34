const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boggie1,boggie2,boggie3,boggie4,boggie5,boggie6,rock
var engine, world;
var chain1,chain2,chain3,chain4,chain5;




var score = 0;
function preload() {
    bg=loadImage("images/bg.jpg")
    trainSound = loadSound("sound/train.mp3");
    crashSound = loadSound("sound/train_crossing.mp3");
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //boggie
    boggie1=new boggie(100,170,50,50);
    boggie2=new boggie(200,170,50,50);
    boggie3=new boggie(300,170,50,50);
    boggie4=new boggie(400,170,50,50);
    boggie5=new boggie(500,170,50,50);
    boggie6=new boggie(600,170,50,50);
    rock=new Rock(1100,170,100,100);
    //chain
    chain1=new Chain(boggie1.body,boggie2.body)
    chain2=new Chain(boggie2.body,boggie3.body)
    chain3=new Chain(boggie3.body,boggie4.body)
    chain4=new Chain(boggie4.body,boggie5.body)
    chain5=new Chain(boggie5.body,boggie6.body)

    ground = new Ground(600,height,1200,20);
   
}

function draw(){

    background(bg);
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
        
    Engine.update(engine);
    //strokeWeight(4);
    ground.display()
    

    boggie1.display()
    boggie2.display()
    boggie3.display()
    boggie4.display()
    boggie5.display()
    boggie6.display()
    rock.display()

    chain1.display()
    chain2.display()
    chain3.display()
    chain4.display()
    chain5.display()

    var collision = Matter.SAT.collides(boggie6.body,rock.body);
    if(collision.collided)
     { flag=1; } if(flag ===1){ textSize(30); stroke(3); fill('blue'); text("CRASH",500,200); crashSound.play();
     }
    
}


function mouseDragged(){
   
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
         Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x,y:boggie6.body.position.y}, {x:0.5,y:0});


}
}   
