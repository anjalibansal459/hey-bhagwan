const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine ,world 
var box1,mainGround,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new box(310,300,50,70);
    box2 = new box(350,300,50,70);
    box3 = new box(400,300,50,70);
    box4 = new box(450,300,50,70);
    box5 = new box(500,300,50,70);
    box6 = new box(550,300,50,70);
    box7 = new box(600,300,50,70);
    box8 = new box(350,280,50,70);
    box9 = new box(400,280,50,70);
    box10 = new box(450,280,50,70);
    box11= new box(500,280,50,70);
    box12= new box(550,280,50,70);
    box13=new box(400,260,50,70)
    box14=new box(450,260,50,70)
    box15=new box(500,260,50,70)
    box16=new box(450,230,50,70)
    mainGround=new Ground(width/2,390,2000,10)
}

function draw(){
    background("black")
    Engine.update(engine)
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    mainGround.display()
    
}

