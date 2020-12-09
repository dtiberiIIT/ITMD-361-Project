var today = new Date();
var days = new Array(7);
days[0] = "Relax, It's Sunday";
days[1] = "Monday, Can't Trust That Day";
days[2] = "Taco Tuesday!";
days[3] = "Half Way There! It's Wednesday";
days[4] = "Thursday, Still Not Friday";
days[5] = "Happy Friday! You Made It! Congratulations!";
days[6] = "Grand Saturday Unto Thee!";

window.onload = function(){  
    document.getElementById("date-greeting").innerHTML = days[today.getDay()];
}