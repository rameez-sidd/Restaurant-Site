var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

var hr = today.getHours();
var tempMin = today.getMinutes();
currentTime = hr + ":" + min;
var min;

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("date").setAttribute("min", today);
document.getElementById("date").setAttribute("value", today);

if (tempMin > 0 && tempMin < 30) {
    min = 30;
}
else if (tempMin > 30 && tempMin < 59) {
    hr = hr + 1;
    min = 0 + "0";
}
availableTime = hr + ":" + min;



container = document.getElementById("date");
function getSelectedDate(){
    console.log(container.value);
}
function calcTime(){
    if (container.value == today){
        if(hr < 11){
            document.getElementById("time").setAttribute("value", "11:30");
        }
        else{
            document.getElementById("time").setAttribute("value", availableTime);
        }
    }
}
function setTimeLimits(){
    if (container.value == today) {
        console.log(container.value);
        document.getElementById("time").setAttribute("min", availableTime);
    }
    else {
        document.getElementById("time").setAttribute("min", "11:30");
    }

}
