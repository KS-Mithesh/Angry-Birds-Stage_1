class block{
    constructor(x,y,width,height){
        var block_options={
            restitution:1,
            friction:0.6,
            density:0.5
        }
    this.body=Bodies.rectangle(x,y,width,height,block_options);
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
        rectMode(CENTER);fill("#caa472");
        rect(0,0,this.width,this.height);
        pop();
    }
}