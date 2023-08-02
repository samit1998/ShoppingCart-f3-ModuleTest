const buttons=document.getElementsByTagName("button")
buttons[0].addEventListener("click",()=>{
    window.location.href="/Login/"
})
buttons[1].addEventListener("click",()=>{
    window.location.href=`/${repositoryName}/cart.html`;
})

function onload(){
    if(localStorage.getItem("currentUser")){
        window.location.pathname="../Shop/index.html"
    }
}
onload();