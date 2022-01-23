
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;
document.getElementById("score").innerHTML = " score: 0"
hole.addEventListener('animationiteration', () => {
    var random = Math.random()*3;
    var top = (random*200)+150;
    console.log("calculating");
    console.log(top);
    hole.style.top = -(top) + "px";
    document.getElementById("score").innerHTML = " score: " + ++counter;
});

setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping == 0){
    character.style.top = (characterTop+3)+"px";
    }
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var cTop = -(750-characterTop);
    if(((characterTop>730)||(characterTop<15))||((blockLeft<170)&&(blockLeft>100)&&((cTop<holeTop)||(cTop>holeTop+135)))){
        character.style.top = 100 + "px";
        alert("Game Over.\nyoure score: " + counter);
        counter = 0;
        document.getElementById("score").innerHTML = " score: " + --counter
    }
}, 8);
let jumpCount = 0;
function jump(){
    jumping = 1;
    var jumpInterval = setInterval(() => {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-6)+"px";
        }
        if(jumpCount >19){
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++
    }, 5);
}


document.onkeydown = function (e) {
    if (e.keyCode == 32) jump();
};
