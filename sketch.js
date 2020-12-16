var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
  createCanvas(w, h);
  noStroke();
}

function draw() {
  var amplee= random(10,40);
  background(255,5);
   fill(255,0,0);
   ellipse(random(400), random(400), amplee, amplee);
}