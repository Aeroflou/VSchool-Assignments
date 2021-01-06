var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
console.log(typeof vegetables)

vegetables.pop()
console.log("vegetables: ", vegetables);

fruit.shift()
console.log("fruit: ", fruit);

var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)
fruit.push(orangeIndex)
console.log("fruit: ", fruit);

var vegLength = vegetables.length
console.log(vegLength)
vegetables.push(vegLength)
console.log("vegetables: ", vegetables);

var food = fruit.concat(vegetables)
console.log(food)
food.splice(4,2)
console.log(food)

var reverseFood = food.reverse()
var joinedFood = reverseFood.join()
console.log(joinedFood)