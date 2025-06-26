var hor=0;
var ver=0;

var change=document.getElementById("pacman");
document.addEventListener("keydown",(e)=>{
    console.log(e.key);
    if(e.key.toLowerCase()=="d")
    {
        hor+=1;
        console.log(hor);
        if(hor<=50){
        change.style.transition='all 0.1s'    
        change.style.transform=`translate(${hor}vw,${ver}vh)`

        }
        else{
            hor=-50;
            change.style.transition='none'  
            change.style.transform=`translate(${hor}vw,${ver}vh)`
        }

        matchingPlace()

        
    }
     if(e.key.toLowerCase()=="a")
    {
        hor-=1;
        console.log(hor);
        if(hor>=-50)
        {
            change.style.transition='all 0.1s'  
        change.style.transform=`translate(${hor}vw,${ver}vh) rotateY(180deg)`

        }
        else{
            hor=50;
            change.style.transition='none' 
            change.style.transform=`translate(${hor}vw,${ver}vh) rotateY(180deg)`
        }
        matchingPlace()
    }

    if(e.key.toLowerCase()=="w")
    {
        ver-=1;
        console.log(ver);
        if(ver>=-50){
        change.style.transition='all 0.1s'    
        change.style.transform=`translate(${hor}vw,${ver}vh) rotate(-90deg)`

        }
        else{
            ver=50;
            change.style.transition='none'  
            change.style.transform=`translate(${hor}vw,${ver}vh) rotate(-90deg)`
        }

        matchingPlace()
    }

    if(e.key.toLowerCase()=="s")
    {
        ver+=1;
        console.log(ver);
        if(ver<=50){
        change.style.transition='all 0.1s'    
        change.style.transform=`translate(${hor}vw,${ver}vh) rotate(90deg)`

        }
        else{
            ver=-50;
            change.style.transition='none'  
            change.style.transform=`translate(${hor}vw,${ver}vh) rotate(90deg)`
        }

        matchingPlace()
    }
})


var horRan=0;
var verRan=0;
function foodOnScreen(){
    horRan=Math.floor(Math.random()*95);
    verRan=Math.floor(Math.random()*95);

    console.log(horRan,verRan)

    document.getElementById("food_item").style.display="block";
    document.getElementById("food_item").style.transform=`translate(${horRan}vw,${verRan}vh)`

    
    
}
foodOnScreen();
var count=0;
var musicCollect=new Audio("./zapsplat_multimedia_game_sound_coin_collect_arcade_retro_simple_bright_009_114152.mp3");
function matchingPlace(){
    if(Math.abs(hor-(horRan-50))<=2 && Math.abs(ver-(verRan-50))<=2){

        // if character
        foodOnScreen();
        musicCollect.play();
        count++;
        document.getElementById("score").innerHTML=count;
    }
    console.log(horRan-50,verRan-50)
    console.log(hor,ver)
}

var musicStart=new Audio("./best-game-console-301284.mp3")
function closeOpenPage(){
    document.getElementById("welcome_screen").style.display="none"
    musicStart.play();
}
