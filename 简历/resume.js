var ercun = document.getElementById("ercun");
var ercunPic = document.getElementById("ercun-pic");

ercun.addEventListener("click",function(){
    if(ercunPic.className === "hide"){
        ercunPic.className = "";
    }else{
        ercunPic.className = "hide";
    }
})