Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach(camera);
function clickPICTURE(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML  = "<img src='"+ data_uri +"' id='anyid'>"
    });
}
console.log("ml5 version",ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6qWW2gZVt/model.json",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
function idenimg(){
    img = document.getElementById("anyid")
    classifier.classify(img,getresult)
}
function getresult(error,result){
    if(error){
        console.log(error)
    }else{
        console.log(result)
        document.getElementById("Object_name").innerHTML = result[0].label
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3)
    }
}