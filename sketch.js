function setup (){
    createCanvas (400, 400);
    noStroke ();
}
function draw (){
    var amplee= random (10, 40);
    background (255, 5)
    fill (255, 0,5)
    ellipse (random (400), random (400), amplee, amplee);
}
