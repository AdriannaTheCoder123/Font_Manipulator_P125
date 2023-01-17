difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
  
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  
  function modelLoaded() {
      console.log('PoseNet is Initialized!');
  }
  
  function gotPoses(results){
      if(results.length > 0) {
  
          console.log(results);

          leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX);
        difference = floor(leftWristX - rightWristX);
      }
  }
  
  function preload() {
  
  }
  
  function draw() {
   background('#C3B1E1');

   document.getElementById("square_side").innerHTML = "Width and Height of the font will be = " + difference + "px";
   textSize(difference);
   text('Adrianna', 250, 250);
   fill(0, 102, 153);
  }