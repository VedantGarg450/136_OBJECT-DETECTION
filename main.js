var vid= ""
var status= ""
function preload(){
    vid= createVideo("video.mp4")
    vid.hide()
}
function setup(){
    canvas= createCanvas(850, 630)
    canvas.position(680, 320)
}
function draw(){
    image(vid, 0, 0, 850, 630)
}
function Start(){
    objectDetector=ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("Status").innerHTML= "Status: Detecting Objects"
}
function modelLoaded(){``
    console.log("Model Loaded Succesfully")
    status= true
    vid.loop()
    vid.speed(1.2)
    vid.volume(0)
}