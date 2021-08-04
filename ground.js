class Ground{
    constructor(x,y,width,height){
        var opts={
            isStatic:true
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,opts);
        World.add(world,this.body);
    }
    display(){
        var pos
        pos=this.body.position;
        push();
        fill("red")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
        pop();
    }
}
