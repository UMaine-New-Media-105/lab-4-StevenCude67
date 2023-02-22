function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if (mouseIsPressed){
    drawHappyGuy(0, 0, 1, "darkred", "red")
  }else(drawHappyGuy(0,0,1,"yellow", "black"))
}

function drawHappyGuy(x, y, faceSize,faceColor, eyeColor){
  push();
  translate(x, y);
  scale(faceSize);
  fill(faceColor)
  ellipse(200, 200, 300);
  push();
  fill("white")
  ellipse(130, 150, 70);
  ellipse(260, 150, 70);
  pop();
  push();
  fill(eyeColor);
  ellipse(130, 150, 50);
  ellipse(260, 150, 50);
  pop();
  push();
  strokeWeight(2)
  angleMode(DEGREES);
  arc(200, 240, 130, 120, 0, 180);
  pop();
  pop();
  
  
}
