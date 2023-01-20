
var mainPopup = "mainPopup";
var subPopup = "subPopup";

function createCookie() {

    var date = new Date();
    date.setDate(date.getDate() + 1); //현재 날짜를 기준으로 +1일 => 23년1월6일 오후 4시 46분까지
    //오늘 날짜 기준 +1일 0시 0분 0초까지로 설정
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    console.log(date);


    var cookie = "";
    cookie += mainPopup + "=true; ";
    cookie += " path=/;";
    cookie += " expires=" + date.toUTCString();

    document.cookie = cookie;
}

function getCookie(x) {
    var arr = document.cookie.split("; ");

    for(var i=0; i<arr.length; i++){
        if(arr[i].indexOf(mainPopup) != -1){
            return true;
        }
    }
}