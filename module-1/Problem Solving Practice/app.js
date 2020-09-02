const largestOf = function(arr){
    let largest = arr[0]
    for(let i  = 0; i < arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i]
        }
    }
    console.log(largest)
}
largestOf([1,2,2,5,7,1,3,8,14234,2,4,5,3,6])

const isPresent = function(arr,character){
    let newArr = []
    let newArrNum = 0
    for(let i = 0; i < arr.length; i++){
        let hasChar = false
        for(let e = 0; e < arr[i].length; e++){
            if(arr[i][e] == character){
                hasChar = true
            }
        }
        if(hasChar == true){
            newArr[newArrNum] = arr[i]
            newArrNum++
        }
        hasChar = false
    }
    console.log(newArr)
}
isPresent(["#3", "$$$", "C%4!", "Hey!"], "!")
isPresent(["this string has the *","helloworld","dave","world*","im a shooting *","no star here"], "*")

const divisibleBy = function(num1,num2){
    if(num1 % num2 == 0){
        return true
    } else {
        return false
    }
}
console.log(divisibleBy(4, 2))
console.log(divisibleBy(9, 3))
console.log(divisibleBy(15, 4))