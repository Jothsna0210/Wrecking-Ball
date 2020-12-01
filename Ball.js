class Ball{
    constructor(x,y,width,height,angle){
        var options={
            'density':0.7,
            'frictionAir':0.005
        }
        //this.r=r;
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }



    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle);
        //rectMode(CENTER)
        ellipse(0,0,this.width,this.height)
        pop();
    }
}