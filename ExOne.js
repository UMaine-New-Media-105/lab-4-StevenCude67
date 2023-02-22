function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  myCircle(70, 130, 80, "rebeccapurple");
  myTriangle(90, 225, 174, 60, 258, 225)
  myQuad(100, 300, 200, 250, 300, 300, 200, 350)
  
}

function myCircle(x, y, circleSize, myColor){
  ellipse(x, y, circleSize);
}

function myTriangle(pointOneX, pointOneY, pointTwoX, pointTwoY, pointThreeX, pointThreeY){
  triangle(pointOneX, pointOneY, pointTwoX, pointTwoY, pointThreeX, pointThreeY);
}

function myQuad(QuadOneX, QuadOneY, QuadTwoX, QuadTwoY, QuadThreeX, QuadThreeY, QuadFourX, QuadFourY){
  quad(QuadOneX, QuadOneY, QuadTwoX, QuadTwoY, QuadThreeX, QuadThreeY, QuadFourX, QuadFourY);
}

