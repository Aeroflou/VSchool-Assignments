/*const collectAnimals = (...animals) => animals
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))*/

const combineFoods = (fruit,sweets,vegetables) => {return{fruit:fruit, sweets:sweets, vegetables:vegetables}}
console.log(combineFoods(["apple", "pear"],["cake", "pie"],["carrit"]))

/*const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};
const parseSentence = ({location,duration}) => `We're going to have a good time in ${location} for ${duration}`
console.log(parseSentence(vacation))*/

/*const returnFirst = items => items[0]
console.log(returnFirst([3,2,3,4,5,6,7,8,9]))*/

/*const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
const returnFavorites = arr =>{
    let firstFav = arr[0]
    let secondFav = arr[1]
    let thirdFav = arr[2]
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
}
console.log(returnFavorites(favoriteActivities))*/

/*const combineAnimals = (...animals) => animals.reduce((a, b) => a.concat(b));
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))*/

/*const product = (...numbers) => numbers.reduce((acc, number) => acc * number,1)
console.log(product(1,2,3,4))*/

/*const unshift = (array, ...things) => array = [...array,...things]
const arr = [1,3,4,5]
console.log(unshift(arr,2,6,7,8,9))*/

const populatePeople= names =>names.map(name => {
    name = name.split(" ");
    let firstName = name[0]
    let lastName = name[1]
    return {
        firstName: firstName,
        lastName: lastName
    }
})
people = populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
console.log(people)