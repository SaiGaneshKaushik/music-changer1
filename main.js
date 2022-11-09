sound1 = "";
sound2 = "";
leftwrist_x = 0;
leftwrist_y = 0;
rightwrist_x= 0;
rightwrist_y = 0;


function preload(){
  sound1 = loadSound("darkside.mp3");
  sound2 = loadSound("ignite.mp3");
}
function setup(){
  canvas = createCanvas(600,500);
  canvas.position(430, 200);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function modelLoaded(){
  console.log("model is loaded");
}
function gotPoses(results){
  if(results.length > 0)
    {
      console.log(results);
      leftwrist_x = results[0].pose.leftWrist.x;
      leftwrist_y = results[0].pose.leftWrist.y;
      rightwrist_x = results[0].pose.rightWrist.x;
      rightwrist_y = results[0].pose.rightWrist.y;
      console.log("leftWrist_x = " + leftwrist_x + "leftWrist_y = " + leftwrist_y + "rightWrist_x = " + rightwrist_x + "rightWrist_y = " + rightwrist_y);
    }
}
function draw(){
  image(video, 0, 0, 600, 500);

}