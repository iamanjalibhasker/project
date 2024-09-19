let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow","green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

 // Game started//
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
    
});

  
// gameFlash for game//
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
         btn.classList.remove("flash");
    },250);
   
}
// userFlash for user//
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
         btn.classList.remove("userflash");
    },250);
   
}

  // game level up //
function levelUp(){
    userSeq = [];
   level++;
   h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
     console.log(gameSeq);
   gameFlash(randbtn);
}
 
 // check ans:----//
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
         setTimeout(levelUp, 1000);
       }
    }else{
       h2.innerHTML = `Game Over! your score was <b>${level}</b> <br> press any key`;
       document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
       reset();
    }
}

 // userbtn//
function btnPress(){
     let btn = this;
     userFlash(btn);

     userColor = btn.getAttribute("id");     
       userSeq.push(userColor);
       checkAns(userSeq.length-1);
}

 // All btn selsect//
let allBtns = document.querySelectorAll(".btn");
 for(btn of  allBtns){
     btn.addEventListener("click", btnPress);

 }

 // reset //
 function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
 }