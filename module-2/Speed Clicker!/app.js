
const timerDis = document.getElementById("timer")
let sec = 10
const timer = () => {
    let timer = setInterval(() => {
        timerDis.innerHTML = sec + "s"
        sec--
        if (sec < 0){
            clearInterval(timer)
        }
    }, 1000)
}
window.addEventListener("load",() => {
    clickNumDis.innerHTML = sessionStorage.clicks
    timer()
})

const clickNumDis = document.getElementById("clicks")
let clickNum = 0
const clickCounter = () =>{
    clickNum++
    clickNumDis.innerHTML = clickNum
}
window.addEventListener("click", () => {
    if (sec >= 0){
       clickCounter() 
    } else {
        alert("You got: " + clickNum + " clicks!")
        sessionStorage.setItem("clicks", clickNum)
    }
})