const icon=document.querySelector("#icon")
const menu=document.querySelector("#menu")

icon.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    icon.classList.toggle("bg-black-200")
})

