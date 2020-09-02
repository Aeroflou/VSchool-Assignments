var greeting = "Hello"
var helloWorld = "Hello World"
var breakfast = "I ate grits for breakfast. They were tasty."

function capAndLow(string){
    var cap = string.toUpperCase()
    var low = string.toLowerCase()
    var capNLow = cap + low
    console.log(capNLow)
}
//capAndLow(greeting)

function findMid(string){
    var stringLength = string.length
    var midMaybe = stringLength / 2
    var mid = Math.floor(midMaybe)
    console.log(mid)
}
//findMid(greeting)

function firstHalf(string){
    var stringLength = string.length
    var halfMaybe = stringLength / 2
    var half = Math.floor(halfMaybe)
    var cutString = string.slice(0,half)
    console.log(cutString)
}
//firstHalf(greeting)

function capHalfLowHalf(string){
    var stringLength = string.length
    var halfMaybe = stringLength / 2
    var half = Math.floor(halfMaybe)
    var cutString = string.slice(0,half)
    var otherCut = string.slice(half)
    var capHalf = cutString.toUpperCase()
    var lowHalf = otherCut.toLowerCase()
    var joinedHalves = capHalf.concat(lowHalf)
    console.log(joinedHalves)
}
capHalfLowHalf(greeting)
capHalfLowHalf(breakfast)