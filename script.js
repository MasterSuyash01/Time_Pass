const bgcolor=document.querySelectorAll("button");
for(let i=0;i<bgcolor.length;i++){
    bgcolor[i].addEventListener("click",function(){
        document.body.style.backgroundColor=bgcolor[i].innerHTML;
    })
}