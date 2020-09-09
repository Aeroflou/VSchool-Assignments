const leastGreat = arr => arr.sort((a,b) => a - b)
console.log(leastGreat([1, 3, 5, 2, 90, 20]))

const greatLeast = arr => arr.sort((a,b) => b - a)
console.log(greatLeast([1, 3, 5, 2, 90, 20]))

const sStrLStr = arr => arr.sort((a,b) => a.length - b.length)
console.log(sStrLStr(["dog", "wolf", "by", "family", "eaten"]))

const alphOrder = arr => arr.sort()
console.log(alphOrder(["dog", "wolf", "by", "family", "eaten"]))

const byAge = arr => arr.sort((a,b) => a.age - b.age)
console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]))