var scale;
var speed;

var d0 = 0;
var d1 = 0.5;
var s0 = 0.9;

var v0 = 5;

var dy = 20;


function calc(d0, d1, s0, v0, dy) {
  scale = Math.pow(s0, (dy - d0)*(d1 - d0));
  console.log(scale)
  speed = v0 / scale;
  console.log('speed', speed);
}

for (var i = 1; i < 40; i++) {
  calc(d0, d1, s0, v0, i);
}
