const arr = [1,2,3,4]

//1
const dblArr = arr => arr.map(num => num * 2)
console.log(dblArr(arr))

//2
const stringify = arr => arr.map(num => num.toString())
console.log(stringify(arr))

//3
const capitalNames = arr => arr.map(name => {
    firstLetter = name.slice(0,1)
    lettCap = firstLetter.toUpperCase()
    mostNam = name.slice(1,name.length)
    mostLow = mostNam.toLowerCase()
    newName = lettCap.concat(mostLow)
    return newName
})
console.log(capitalNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))

const objArr = [{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}]

//4
const nameArray = objArr => objArr.map(obj => obj.name)
console.log(nameArray(objArr))

//5
const moviePermission = objArr => objArr.map(obj => {
    if (obj.age >= 18){
        return (obj.name + " can go see the Matrix!")
    } else {
        return(obj.name + " is not old enough to go see the Matrix...")
    }
})
console.log(moviePermission(objArr))

//6
const h1h2 = objArr => objArr.map(obj => "<h1>" + obj.name + "</h1><h2>" + obj.age + "</h2>")
console.log(h1h2(objArr))