let array =[];

function preload(){
  mySound = loadSound('fairy.mp3');
}
function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);
  background(220);
  angleMode(DEGREES);
  stroke(1);
  circle(mouseX, mouseY, 20);

  // colorMode(HSB,360, 150, 100,1);
  // slider = createSlider(100,255,50);
  // slider2 = createSlider(6,32,6);
  // strokeWeight(5);
  // noFill();
}

function draw() {
  background(255,130,12,5);
  // fill('pink');
  // circle(mouseX,mouseY,20,30);

//   translate(width/2, height/2);
//   let sat = slider.value();
//   angle = slider2.value();
//
//   for (let i - 0; i<angle; i++) {
//     rotate(angle);
//     strokeWeight(10);
//     stroke(mouseX, sat, sat, 0.5);
//     line(mouseX, mouseY, pmouseX, pmouseY);
//
//     push();
//     scale(1,-1);
//     line(mouseX, mouseY, pmouseX, pmouseY);
//     pop();
//   }
// }
pattern();
  if (mouseIsPressed == true) {

 clear();
 background(random(255,255,50), random(255,255,50), random(100, 255,10));


    //background(255,130,12,5);
    //stroke(map(mouseX,0,600,0,255,true);
    //line(width- mouseX, height-mouseY, width-pmouseX, height-pmouseY);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    //array.push([mouseX, mouseY]);
}

}
function mousePressed(){
  mySound.play();
}

function pattern(){
 //set up colors and angle of rotation
  rotateX(60);
  noFill();
  stroke(255);
  //adjust colors
  for (var i = 0; i <50; i++){
    var r = map(sin(frameCount/2), -1, 1, 100, 200);
    var g = map(i, 0, 50, 100, 200);
    var b = map(cos(frameCount), -1,1, 200, 100);
    stroke(r,g,b);
    rotate(frameCount/20);

    //create patterns with
    beginShape()
    for (var j = 0; j <360; j+=60){
      var rad = i*3;
      var x = rad *cos(j);
      var y = rad *sin(j);
      var z = sin(frameCount *2 + i *5)*50

      vertex(x,y,z);

    }
    endShape(CLOSE);
  }
}

function keyTyped(){

  if (key === 's'){
    //save this image
    saveCanvas('fileName', 'png');
} else if (key === 'd'){
background(255);

//display image
//clear();
// beginShape();
//     for (let i = 0; i < array.length; i++){
//       //line(array[i][0],array[i][1],array[i+1][0],array[i+1][1]);
//       curveVertex(array[i][0],array[i][1])
//   }
//   endShape();
}
  return false;

}
