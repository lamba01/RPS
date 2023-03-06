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