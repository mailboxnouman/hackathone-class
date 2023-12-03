// <!-- -----javascript for Toggel Menu-----  -->
function desktopTg(){
    document.getElementById('toggelScreen').className = ""  
    document.getElementById('desktop').className = "active"
    document.getElementById('laptop').className = "laptop"
    document.getElementById('tablet').className = "tablet"
    document.getElementById('landscape').className = "landscape"
    document.getElementById('mobile').className = "mobile"


}
function laptopTg(){
    document.getElementById('toggelScreen').className = "laptopScreen"  
    document.getElementById('laptop').className = "active"
    document.getElementById('desktop').className = "desktop"
    document.getElementById('tablet').className = "tablet"
    document.getElementById('landscape').className = "landscape"
    document.getElementById('mobile').className = "mobile"


    
}
function tabletTg(){
    document.getElementById('toggelScreen').className = "tabletScreen"  
    document.getElementById('tablet').className = "active"
    document.getElementById('desktop').className = "desktop"
    document.getElementById('laptop').className = "laptop"
    document.getElementById('landscape').className = "landscape"
    document.getElementById('mobile').className = "mobile"


}
function landscapeTg(){
    document.getElementById('toggelScreen').className = "landscapeScreen"  
    document.getElementById('landscape').className = "active"
    document.getElementById('desktop').className = "desktop"
    document.getElementById('laptop').className = "laptop" 
    document.getElementById('tablet').className = "tablet"
    document.getElementById('mobile').className = "mobile"

}
function mobileTg(){
    document.getElementById('toggelScreen').className = "mobileScreen"  
    document.getElementById('mobile').className = "active"
    document.getElementById('desktop').className = "desktop"
    document.getElementById('laptop').className = "laptop" 
    document.getElementById('tablet').className = "tablet"
    document.getElementById('landscape').className = "landscape"

}










function hideScreen(){
    document.getElementById('screen').className = "hideScreen"
}




var navlinks = document.getElementById("navlinks");
function showMenu(){
    navlinks.style.marginRight = "-200px";
    
    document.getElementById('shadow').className = "shadow"
    var body = document.getElementById("overFl");
    body.style.overflow = "hidden";
}
function hideMenu(){
    navlinks.style.marginRight = "0px";

    document.getElementById('shadow').className = "navHide"
    var body = document.getElementById("overFl");
    body.style.overflow = "scroll";
}