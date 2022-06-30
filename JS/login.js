let pow = document.getElementsByClassName("login");
let res = document.getElementsByClassName("footer");
let bod = document.getElementsByTagName("body");

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
    let userName = document.getElementById("user_name").value;
    if(userName != ""){
        localStorage.setItem("userName", userName);
        window.open("../HTML/desktop.html","_self");
        // window.open("../HTML/desktop.html","_self");
        // window.close();
    }
    else{
        alert("error");
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

    let am_pm;
    let hour = dateTime.getHours();
    if(hour>12){
        hour = hour -12;
        am_pm = "pm";
    }
    else{
        am_pm = "am";
    }
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let currentTime = hour +" : " + min +" : " + sec + " : "+am_pm;
    document.getElementById("date_time").innerHTML= `${currentTime}<br>${currentDate}`;
    setInterval(function(){dateAndTime()},1000);
}
dateAndTime();

function capsLockOn(){
    var input = document.getElementById("user_name");
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