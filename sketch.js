function setup() {
createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
  //  fill(random(255), random(255), random(255))
  fill(0);


} else {
// fill(255);
  fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
}
  stroke(255, 255, 255, 25);
    rect(mouseX,mouseY,50,50);

}
