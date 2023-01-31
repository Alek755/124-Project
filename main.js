function setup() {
    video = createCapture(VIDEO);
    video.size(500, 380);
    video.position(400,300);

    canvas = createCanvas(500, 380);
    canvas.position(1000, 300);

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose', gotPoses);

    function ModelLoaded() {
        console.log("MODEL IS LOADED");

    }

    function gotPoses() {

    }
}