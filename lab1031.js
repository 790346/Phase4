window.onload = init;
var canvas;
var ctx;
var particles = [];
var mover, orb;

function init(){
  canvas = document.getElementById('cnv')
  canvas.width = window.innerWidth - 50;
  canvas.height = window.innerHeight - 50;
  canvas.style.border = 'solid red 3px';
  canvas.style.backgroundColor = randomColor();
  ctx = canvas.getContext('2d');
  mover = new Mover();
  orb = new Orbiter();
//  makeParticles();
  particle = new Particle(new JSVector(window.innerWidth/2, 50));
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width, canvas.height);
  particle.update();
  orb.update();
  mover.update();

}


function randomColor(){
  var r = Math.random() * 255|0;
  var g = Math.random() * 255|0;
  var b = Math.random() * 255|0;
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function makeParticles(numParticles){
  for(var i = 0; i < numParticles; i++){
      particles.push(new Particle(new JSVector(window.innerWidth/2, 50)));
      particles[i].update;
  }
}
