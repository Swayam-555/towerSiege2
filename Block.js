class Block{
  constructor(x, y, width, height) {
    var options = {
      restitution :0.4,
      friction :0.0,
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  this.image = loadImage("block.png");
  this.image.scale = 0.5;
  this.visibility = 225;
  World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      var angle = this.body.angle;
     
      if(this.body.speed < 3){ push(); angleMode(RADIANS); translate(pos.x,pos.y); rotate(angle); rectMode(CENTER); rect(0,0,this.width, this.height); pop(); } else{ World.remove(world,this.body); this.visibility = this.visibility-5; push(); tint(255,this.visibility);
         image(this.image,pos.x,pos.y,30,40); pop() }
    }
}