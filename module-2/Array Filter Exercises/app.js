const fiveOrGreater = arr => arr.filter(num => num >= 5)
console.log(fiveOrGreater([3, 6, 8, 2]))

const evensOnly = arr => arr.filter(num => num % 2 === 0)
console.log(evensOnly([3, 6, 8, 2]))

const smallStrings = arr => arr.filter(str => str.length <= 5)
console.log(smallStrings(["dog", "wolf", "by", "family", "eaten", "camping"]))

const illuminatiClub = arr => arr.filter(obj => obj.member)
console.log(illuminatiClub([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]))

const ofAge = arr => arr.filter(obj => obj.age >= 18)
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]))

