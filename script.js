//  fuction for rules toggle
var rulescontainer = document.querySelector('aside');
var rulesbtn = document.getElementById('rules-btn');
var closerules = document.querySelector('.icon-close');
rulesbtn.onclick = function () {
    rulescontainer.style.display = 'block';
}
closerules.onclick = function() {
    rulescontainer.style.display = 'none';
}

// function for user selection
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let rock = document.getElementById("rock");

 paper.addEventListener("click", ()=> {
    document.querySelector(".game-body").classList.add("d-none");
     document.querySelector(".chooserock").style.display = 'none';
     document.querySelector(".choosescissors").style.display = 'none'
     document.getElementById("mine1").className = "circle-paper";
     document.querySelector(".selection").classList.add("d-flex")
     setTimeout(choice, 1000);
     let paperr = "paper"
     localStorage.setItem("userchoice", paperr)
     setTimeout(game, 1500)
 }) 
rock.addEventListener("click", () =>{
    document.querySelector(".game-body").classList.add("d-none")
    document.querySelector(".choosepaper").style.display = 'none';
    document.querySelector(".choosescissors").style.display = 'none'
    document.getElementById("mine2").className = "circle-rock";
    document.querySelector(".selection").classList.add("d-flex")
    setTimeout(choice, 1000);
    let rockk = "rock";
    localStorage.setItem("userchoice", rockk)
    setTimeout(game, 1500)
}) 

   

scissors.addEventListener("click", ()=>{
    document.querySelector(".game-body").classList.add("d-none")
    document.querySelector(".choosepaper").style.display = 'none';
    document.querySelector(".chooserock").style.display = 'none';
    document.getElementById("mine3").className = "circle-rock";
    document.querySelector(".selection").classList.add("d-flex")
    setTimeout(choice, 1000);
    let sciss = "scissors";
    localStorage.setItem("userchoice", sciss)
    setTimeout(game, 1500)
}) 
   

// function for computer selection
var compchoice =  Math.ceil(Math.random() * 3)
function choice() {
    
    if(compchoice === 2){
        document.getElementById("comp1").className = "big-paper-circle"
        document.querySelector(".comppaper").style.display = 'block'
        document.getElementById("comp").style.display = 'none'
        document.getElementById("comp1").className = "circle-rock";
    }
    else if(compchoice === 1){
        document.getElementById("comp").className = "big-circle-rock"
        document.querySelector(".comprock").style.display = 'block'
        document.getElementById("comp").style.display = 'none'
        document.getElementById("comp2").className = "circle-rock";
    }
    else{
        document.getElementById("comp").className = "big-circle-scissors"
        document.querySelector(".compscissors").style.display = 'block'
        document.getElementById("comp").style.display = 'none'
        document.getElementById("comp3").className = "circle-rock";
    }
}

// function to decide winner
function game() {
    document.querySelector(".playagain-btn").style.display = "block";
    document.querySelector(".playagain-btn-mobile").style.display = "block";
    var score = document.getElementById("score");
    var result = document.querySelector(".win-lose");
    if(
      (localStorage.getItem("userchoice") === "rock" && compchoice === 3) ||
      (localStorage.getItem("userchoice") === "paper" && compchoice === 1) ||
      (localStorage.getItem("userchoice") === "scissors" && compchoice === 2)
    ){
        result.textContent = "You Win"
        score.value++
        localStorage.setItem("score", score.value)
    }else if(
        (localStorage.getItem("userchoice") === "rock" && compchoice === 2) ||
        (localStorage.getItem("userchoice") === "paper" && compchoice === 3) ||
        (localStorage.getItem("userchoice") === "scissors" && compchoice === 1)
    ){
        result.textContent = "you lose"
        if(score.value > 0){
        score.value--
        localStorage.setItem("score", score.value)}
    }else {
    result.textContent = "draw"
}
document.querySelector('.win-lose-mobile').textContent = result.textContent;
}

// play again btn
 function playagain() {
    document.querySelector('.selection').classList.remove('d-flex');
    document.querySelector('.game-body').classList.remove('d-none');
}

score.value = localStorage.getItem("score")

