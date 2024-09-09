let but = document.querySelector(".nav_but2")
let change = true
function clicd (){
    if (change) {
        let menu = document.querySelector(".menu")
        menu.style.opacity="1"
        menu.style.visibility="visible"
        change=false
    }
    else{
        let menu = document.querySelector(".menu")
    menu.style.opacity="0"
        menu.style.visibility="hidden"
change=true
    }
}
but.addEventListener("click",clicd)