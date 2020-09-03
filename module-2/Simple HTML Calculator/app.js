const addition = document.add
const subtraction = document.subtract
const multiplication = document.multiply

const formAddition = function(){
    let num1 = parseFloat(addition.anum1.value)
    let num2 = parseFloat(addition.anum2.value)
    let value = num1 + num2
    let answerBox = document.getElementById("addAnswer")
    answerBox.textContent = value
}
addition.addEventListener("submit",function(event){
    event.preventDefault()
    formAddition()
})

const formSubtraction = function(){
    let num1 = parseFloat(subtraction.snum1.value)
    let num2 = parseFloat(subtraction.snum2.value)
    let value = num1 - num2
    let answerBox = document.getElementById("subAnswer")
    answerBox.textContent = value
}
subtraction.addEventListener("submit",function(event){
    event.preventDefault()
    formSubtraction()
})

const formMultiplication = function(){
    let num1 = parseFloat(multiplication.mnum1.value)
    let num2 = parseFloat(multiplication.mnum2.value)
    let value = num1 * num2
    let answerBox = document.getElementById("multAnswer")
    answerBox.textContent = value
}
multiplication.addEventListener("submit",function(event){
    event.preventDefault()
    formMultiplication()
})