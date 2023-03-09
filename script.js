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

 paper.onclick = function() {
     document.querySelector(".game-body").style.display = 'none';
     document.querySelector(".chooserock").style.display = 'none';
     document.querySelector(".choosescissors").style.display = 'none'
     document.getElementById("mine1").className = "circle-paper";
     document.querySelector(".selection").style.display = 'flex'
     setTimeout(choice, 1000);
 }
rock.onclick = function() {
    document.querySelector(".game-body").style.display = 'none';
    document.querySelector(".choosepaper").style.display = 'none';
    document.querySelector(".choosescissors").style.display = 'none'
    document.getElementById("mine2").className = "circle-rock";
    document.querySelector(".selection").style.display = 'flex'
    setTimeout(choice, 1000);
}
scissors.onclick = function() {
    document.querySelector(".game-body").style.display = 'none';
    document.querySelector(".choosepaper").style.display = 'none';
    document.querySelector(".chooserock").style.display = 'none';
    document.getElementById("mine3").className = "circle-rock";
    document.querySelector(".selection").style.display = 'flex'
    setTimeout(choice, 1000);
}





// function for computer choice
function choice() {
    var compchoice =  Math.ceil(Math.random() * 3)
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
