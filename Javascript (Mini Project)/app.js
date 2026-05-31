let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","blue"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;

        levelUp();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}
function userflash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },100);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.textContent="Level "+level;

    let ranIdx=Math.floor(Math.random()*3);
    let randColor=btns[ranIdx];
    let randbtn=document.querySelector('.'+randColor);
    // 
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnflash(randbtn); 
}

function checkAns(idx){
    // console.log("current level: "+level);
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.textContent="Game Over, Your Score is " + level + ". Press any key to restart the game.";
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}
function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}

function btnPress(){
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
} 
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}