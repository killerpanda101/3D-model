// Parijat Chatterjee 

var angle = 0;
var deer;
var hide;

function preload() {
  hide = loadImage('deer-skin-pattern.jpg');
  deer = loadModel('deer.obj');
}

function setup() {
  createCanvas(700, 500, WEBGL);
}

function draw() {
  background(0);
  ambientLight(255, 0, 255);
  directionalLight(255, 255, 255, 0, 0, 1);
  translate(0,170,0);
  scale(0.3);
  rotateY(angle);
  texture(hide);
  model(deer);
  angle += 0.03;
}
