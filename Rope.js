class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:3,
            length:400
        }
        this.pointB=pointB;
        this.string=Constraint.create(options)
        World.add(world,this.string)

    }
    //attach(body){
        //this.string.bodyA=body;
    //}
    

    
    display(){
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
        push()
        stroke(255)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
    }
}