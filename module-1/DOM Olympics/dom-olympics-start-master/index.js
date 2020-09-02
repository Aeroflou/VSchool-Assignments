var header = document.getElementById("header")
header.textContent = "JavaScript Made This!!"
header.style.textAlign = "center"
header.style.fontSize = "30px"

header.innerHTML += '<p id="writer">Austin wrote this JavaScript</p>'
var p = document.getElementById("writer")
writer.style.fontSize = "15px"


//Bronze
var textsLeft = document.getElementsByClassName("left")
var textsRight = document.getElementsByClassName("right")
/*var left1 = textsLeft[0].textContent
var left2 = textsLeft[1].textContent
var right1 = textsRight[0].textContent
var right2 = textsRight[1].textContent
left1 = "Hello old friend!"
right1 = "Hello! it's great to hear from you again!"
left2 = "Would you like to meet up at the old treehouse and catch up?"
right2 = "Of course, see you there!"*/

document.getElementsByClassName("left")[0].textContent = "Hello old friend!"
document.getElementsByClassName("right")[0].textContent = "Hello! it's great to hear from you again!"
document.getElementsByClassName("left")[1].textContent = "Would you like to meet up at the old treehouse and catch up?"
document.getElementsByClassName("right")[1].textContent = "Of course, see you there!"

function cleanChat(){
    document.getElementsByClassName("left")[0].textContent = ""
    document.getElementsByClassName("left")[1].textContent = ""
    document.getElementsByClassName("right")[0].textContent = ""
    document.getElementsByClassName("right")[1].textContent = ""
}

var button = document.getElementById("clear-button")
button.addEventListener("click",function(){
    cleanChat()
})


//Silver
var dropDown = document.getElementById("theme-drop-down")
var value = document.getElementById("theme-drop-down").value

function themeSwitch(value){
    if (value == "theme-one"){
        for (var i = 0;i < textsRight.length; i++){
            textsRight[i].style.backgroundColor = "lightblue"
        }
        for (var i = 0;i < textsLeft.length; i++){
            textsLeft[i].style.backgroundColor = "burlywood"
            textsLeft[i].style.color = "black"
        }        
    } else {
        for (var i = 0;i < textsRight.length; i++){
            textsRight[i].style.backgroundColor = "maroon"
        }
        for (var i = 0;i < textsLeft.length; i++){
            textsLeft[i].style.backgroundColor = "black"
            textsLeft[i].style.color = "white"
        }
        
    }
}

dropDown.onchange = function(){
    value = document.getElementById("theme-drop-down").value
    themeSwitch(value)
}