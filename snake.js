function Mover(){
  this.loc = new JSVector(window.innerWidth/2, window.innerHeight/2);
  this.vel = new JSVector(2, 3.5);
  //this.acc = acc;
  this.len = 20;
  this.clr = "rgba(200, 50, 20)";
}
  this.update = function(){
    this.vel.limit(1);
    this.loc.add(this.vel);
    //console.log("radius",this.len);
    if(this.loc.x >= (window.innerWidth  - this.len)) {
       this.vel.x *= -1;
       this.loc.x = window.innerWidth - this.len;
    }
    if (this.loc.x <= this.len){
       this.vel.x *= -1;
       this.loc.x = this.len;
    }
    if(this.loc.y >= window.innerHeight - this.len ) {
       this.loc.y = window.innerHeight - this.len;
       this.vel.y *= -1;
    }
    if (this.loc.y <= this.len) {
       this.vel.y *= -1;
       this.loc.y = this.len;
    }
    this.render();

}

  this.render = function(){
        ctx.fillStyle = "rgba(120, 50, 30,1)";
        ctx.beginPath();
        ctx.arc(this.loc.x, this.loc.y, this.len, Math.PI*2,0,false);
        ctx.stroke();
        ctx.fill();
  }
