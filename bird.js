class bird{
    constructor(){
        var bird_options={
            restitution:1,
            friction:0.6,
            density:0.5
        }
    this.body=Bodies.rectangle(mouseX,mouseY,50,50,bird_options);
    this.width=50;
    this.height=50;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}