
difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,530);

    canvas=createCanvas(550,400);
    canvas.position(600,155);
    
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('posenet model is loaded');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;

        difference=floor(leftWristX-rightWristX);
        console.log(leftWristX,rightWristX);
    }
}
function draw(){
    background('#000');
    document.getElementById("font_size").innerHTML="Font size of the text will be - " + difference + " px";
    textSize(difference);
    fill('#ffffff');
    text('Agrah',50,400);
}