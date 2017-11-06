
function Orbiter(){
this.loc = new JSVector(0,0);
this.theta = 0;
this.amp = 50;
this.angVel = 0.01;
this.clr = randomColor();
}

this.update = function(){

   this.theta += this.angVel;
   this.loc.x = mover.loc.x + Math.cos(this.theta)*this.amp;
   this.loc.y = mover.loc.y + Math.sin(this.theta)*this.amp;
   this.render();
}

this.render = function(){
   ctx.fillStyle = "rgba(150, 50, 180)";
   ctx.beginPath();
   ctx.arc(this.loc.x, this.loc.y, 7, Math.PI*2,0,false);
   ctx.stroke();
   ctx.fill();
}
