function powerOn(){
    function loginPage(){
        window.open("../HTML/login.html","_self");
    }
    setTimeout(loginPage,5000);
    document.getElementById("pwBtn").style.display="none";
    let welcome = document.getElementsByClassName("main_box");
    welcome[0].style.display="block";
}