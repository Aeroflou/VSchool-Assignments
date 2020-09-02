//Preliminary
/*for (var i = 0; i < 10; i++){
    console.log(i)
}*/

/*for (var i = 9; i != -1; i--){
    console.log(i)
}*/

/*var fruit = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}*/

//Bronze Medal
/*var emptyArray = []
for(var i = 0; i < 10; i++){
    emptyArray[i] = i
}*/

/*for(var i = 0; i <= 100; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}*/

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var otherFruit = []
var fCount = 0
for(var i = 0; i < fruit.length; i++){
    if (i % 2 == 0){
       otherFruit[fCount] = fruit[i] 
    } else {
        fCount++
    }
}
console.log(otherFruit)
