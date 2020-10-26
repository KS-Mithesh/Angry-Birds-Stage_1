class pig{
    constructor(x,y,width,height){
        var pig_options={
            restitution:1,
            friction:0.6,
            density:0.5
        }
    this.body=Bodies.rectangle(x,y,width,height,pig_options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);fill("#00FF00");
        rect(0,0,this.width,this.height);
        pop();
    }
}