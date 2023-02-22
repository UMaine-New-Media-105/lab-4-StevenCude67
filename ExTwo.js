function setup() {
  createCanvas(400, 400);
}
//background
function draw() {
  background(220);
  
//creates shapes
  myCircle(70, 130, 80, 138, 43, 226);
  myTriangle(90, 225, 174, 60, 258, 225, 255, 127, 80);
  myQuad(100, 300, 200, 250, 300, 300, 200, 350, 55, 127, 80);
}

//function purple circle
function myCircle(x, y, circleSize, circleR, circleG, circleB) {
  //Creates purple circle
  push();
  fill(circleR, circleG, circleB);
  ellipse(x, y, circleSize);
  pop();
}

//function orange triangle
function myTriangle(
  pointOneX,
  pointOneY,
  pointTwoX,
  pointTwoY,
  pointThreeX,
  pointThreeY,
  triangleR,
  triangleG,
  triangleB
) {
    //creates orange triangle
  push();
  fill(triangleR, triangleG, triangleB);
  triangle(
    pointOneX,
    pointOneY,
    pointTwoX,
    pointTwoY,
    pointThreeX,
    pointThreeY
  );
  pop();
}

//function green diamond
function myQuad(
  QuadOneX,
  QuadOneY,
  QuadTwoX,
  QuadTwoY,
  QuadThreeX,
  QuadThreeY,
  QuadFourX,
  QuadFourY,
  quadR,
  quadG,
  quadB
) {
    //creates green diamond
  push();
  fill(quadR, quadG, quadB);
  quad(
    QuadOneX,
    QuadOneY,
    QuadTwoX,
    QuadTwoY,
    QuadThreeX,
    QuadThreeY,
    QuadFourX,
    QuadFourY
  );
  pop();
}
