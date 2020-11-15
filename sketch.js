const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var ground, ball,score=0;

function preload(){
polygonimg=loadImage("polygon.png")
}  
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   ground=new Ground(600,height,1200,20)


sling=new Slingshot(bird.body,{x:200,y:50})

  /*  var ball_options ={
        restitution: 2.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);
*/
    //console.log(ground);
    box1=new Box(700,320,70,70)
    box2=new Box(920,320,70,70)
}

function draw(){
 
    background(0);

    Engine.update(engine);
    textSize(25)
    fill("white")
    text("score"+score,width-300,50)
   ground.display()                          
box1.display()
box2.display()


sling.display()
//   ellipseMode(RADIUS);
 //   ellipse(ball.position.x, ball.position.y, 20, 20);
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly()
}
function keyPressed(){
   if(keyCode==32&&bird.body.speed<1){
   bird.trajectory=[]
   Matter.Body.setPosition(bird.body,{x:200,y:50})
    sling.attach(bird.body)
}}
async function getbackgroundimg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON=await response.json()
    var datetime= responseJSON.datetime;
    var hour=datetime.slice(11,13)
    if(hour>=06&&hour<=19){
        bg="bg.png"
    }
    else{bg="bg2.jpg"}
    backgroundimage=loadImage(bg)
}