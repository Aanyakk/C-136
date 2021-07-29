video="";


function preload()
{
video=createVideo("video.mp4");
video.hide();
}

function draw()
{
image(video,0,0,480,310);
}

function setup()
{
 canvas=createCanvas(480,310);
 canvas.center();
}

function start()
{
    objectDetecter=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status : Detecting objects";
}

function stop()
{
    video.stop();
}

function modelLoaded()
{
    console.log("modelLoaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(1);
}