let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let h2=document.querySelector('h2');
 
let btns=["a","b","c","d"];

document.addEventListener('keypress',function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
})
function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            levelUp();
        }

    } else {
        h2.innerText="gameover!";
        reset();
    }
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);
    console.log("done");
    }

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let idx=Math.floor(Math.random()*4);
    let randcolor=btns[idx];
    let randbtn=document.querySelector(`.${randcolor}`);
    btnflash(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);

}
function btnpressed(){
    let btn=this;
    btnflash(btn);
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
let allBtns=document.querySelectorAll('.box');
for(box of allBtns){
    box.addEventListener('click',btnpressed);
    
}