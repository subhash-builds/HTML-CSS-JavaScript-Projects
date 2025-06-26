

var constant=1000;

function playingGame(){
    var degrees=Math.round(Math.random()*10000);
    var actualRotate=constant+degrees;
    console.log(actualRotate)
    document.querySelector(".wheel").style.transform=`rotate(${actualRotate}deg)`
}