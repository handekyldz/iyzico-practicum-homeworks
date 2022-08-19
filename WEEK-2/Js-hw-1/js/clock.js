function showTime(){


var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
var d = new Date();
var dayName = days[d.getDay()];
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
minutes = inFrontOf(minutes);
seconds = inFrontOf(seconds);
document.getElementById("myClock").innerHTML = hours+":"+minutes+":"+seconds+" "+dayName;
setTimeout(showTime,1000);
}

function inFrontOf (i) {
    if (i<10 ) {i="0"+i};
    return i ;
}


var name = prompt("İsminizi giriniz","")

document.getElementById("myName").innerHTML = name


document.getElementById("myClock").onload = showTime()