picapeX=0;
picapeY=0;

function preload() {
  picape = loadImage('picape.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet foi inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    picapeX = results[0].pose.picape.x-15;
    picapeY = results[0].pose.picape.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(picape, picapeX, picapeY, 30, 30);
}

function takeSnapshot(){    
  save('myFilterImage.png');
}
