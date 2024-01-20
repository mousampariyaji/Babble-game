var timer = 25;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() *10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBabble(){
    var Clutter = "";

for(var i=1; i<=126; i++){
    var rn = Math.floor(Math.random()*10);
    Clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = Clutter;    
}

function runTimer() {
    var timerint = setInterval(function () {
        if(timer > 0) {    
        timer--;
        document.querySelector("#timerval").textContent = timer;
        } else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over<h1/>`;
        }
    },2000)
}

document.querySelector("#pbtm")
.addEventListener("click", function(dets){
var clickednum = Number(dets.target.textContent);
if(clickednum === hitrn){
    increaseScore();
    makeBabble();
    getNewHit();
}
});

runTimer();
makeBabble();
getNewHit();
