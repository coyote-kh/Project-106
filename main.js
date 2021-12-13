function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Gu8SesW-G/model.json', modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
} 