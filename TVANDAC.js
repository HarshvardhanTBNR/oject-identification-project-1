function preload(){
    img=loadImage("CAR.jpg");
    }
    
    function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
    }
    
    function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Car",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,330)
    }
    
    function modelLoaded(){
    console.log("Cocossd model Loaded!");
    status=true;
    objectDetector.detect(img,gotResult);
    }
    function gotResult(error,results){
    if(error){
    console.log(error);
    }
    else{console.log(results);}
    }
    