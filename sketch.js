var database,form,playerCount,player;

function preload() {

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
form =new Form();
player=new Player();
player.getPlayerCount();
  
}

function draw() {
  background(255);  

  form.display();
  drawSprites();
}

