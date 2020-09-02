/*var userInput = document.getElementById("input")
var button = document.getElementById("button")
var input = document.createElement("p")
function log(){
    console.log(userInput.value)
    input = userInput.value
    document.body.append(input)
}

button.addEventListener("click", log)*/
var djButton = document.getElementById("djButton")

function rave(event){
    if (event == "mouseover" || event == 66){
        djButton.style.backgroundColor = "blue"
    } else if (event == "down" || event == 82){
        djButton.style.backgroundColor = "red"
    } else if (event == "up" || event == 89){
        djButton.style.backgroundColor = "yellow"
    } else if (event == "double" || event == 71){
        djButton.style.backgroundColor = "green"
    } else if (event == "scroll" || event == 79) {
        djButton.style.backgroundColor = "orange"
    }
}

djButton.addEventListener("mouseover", function(){
    rave("mouseover")
})
djButton.addEventListener("mousedown", function(){
    rave("down")
})
djButton.addEventListener("mouseup", function(){
    rave("up")
})
djButton.addEventListener("dblclick", function(){
    rave("double")
})
djButton.addEventListener("mousewheel", function(){
    rave("scroll")
})

window.addEventListener("keydown", function(){
    rave(event.which)
})