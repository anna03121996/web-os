let pow = document.getElementsByClassName("login");
let res = document.getElementsByClassName("footer");
let bod = document.getElementsByTagName("body");

function powerOff(){
    pow[0].style.display="none";
    res[0].style.display="none";
    bod[0].style.backgroundImage="url('../MEDIA/IMAGE/loading_image.jpg')";
    bod[0].style.backgroundRepeat="no-repeat";
    bod[0].style.backgroundSize="cover";
    // bod[0].style.filter="blur(8px)";
    // bod[0].style[-webkit-filter]="blur(8px)";
    // //-webkit-filter: blur(8px);
    function goBack(){
        window.open("../HTML/power.html","_self");
    }
    setTimeout(goBack,3000)
}
function restart(){
    pow[0].style.display="none";
    res[0].style.display="none";
    bod[0].style.backgroundImage="url('../MEDIA/IMAGE/loading_image.jpg')";
    bod[0].style.backgroundRepeat="no-repeat";
    bod[0].style.backgroundSize="cover";
    // bod[0].style.filter="blur(50px)";
    // bod[0].style[-webkit-filter]="blur(8px)";
    function reloadFunction(){
        location.reload();
    }
    setTimeout(reloadFunction,3000);
}
function login(){
    let pw = document.getElementById("pwd").value;
    if(pw == "admin"){
        setTimeout((window.open("../HTML/desktop.html")),3000);
    }else{
        alert("wrong password");
    }
}

let num = 1;
function powerOptions(){
    num++;
    if(num%2 == 0){
        document.getElementById("restart").style.display="block";
        document.getElementById("shutDown").style.display="block";
    }
    else{
        document.getElementById("restart").style.display="none";
        document.getElementById("shutDown").style.display="none";
    }
}
function dateAndTime(){
    let dateTime = new Date();
    let weekDaysArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let wd = weekDaysArr[dateTime.getDay()];
    let dd = dateTime.getDate();
    let monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let mm = monthArr[dateTime.getMonth()];
    let yyyy = dateTime.getFullYear();
    let currentDate = wd + " " + dd + " "+ mm + " "+ yyyy;
    let hour = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let currentTime = hour +" : " + min +" : " + sec;
    document.getElementById("date_time").innerHTML= `${currentTime}<br>${currentDate}`;
    setTimeout(function(){dateAndTime()},1000);
}
dateAndTime();

function capsLockOn(){
    var input = document.getElementById("pwd");
    var text = document.getElementById("text");
    input.addEventListener("keyup", function(event) {
    if (event.getModifierState("CapsLock")) {
        text.innerHTML = "Caps Lock is On";
    } else {
            text.innerHTML = "&nbsp;";
        }
    });
}
capsLockOn();