let pushed = false; 

function pushLeft(){  
    bodyCode = document.getElementById("everything"); 
    sideCode = document.getElementById("sidebar"); 
    if(!pushed){
        sideCode.classList.add("slidein") 
        pushed = true;
    } 
    else{ 
        sideCode.classList.remove("slidein") 
        sideCode.classList.add("slideout")
        pushed = false
    }
} 
