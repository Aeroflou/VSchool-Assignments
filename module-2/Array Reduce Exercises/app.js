const total = arr => arr.reduce((fin,cur) => fin += cur)
console.log(total([1,2,3]))

const stringConcat = arr => arr.reduce((fin, cur) => fin += cur.toString())
console.log(stringConcat([1,2,3,"bird",5]))

const didVote = arr => arr.reduce((fin,cur) =>{
    if (cur.voted === true){
        fin++
    }
    return fin
},0)
console.log(didVote([
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]))

const shopSpree = arr => arr.reduce((fin,cur) => fin += cur.price, 0)
console.log(shopSpree([
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]))

const flatten = arr => arr.reduce((fin,cur) => {
    cur.map(item => fin.push(item))
    return fin
},[])
console.log(flatten([
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]))

const voteResults = arr =>  arr.reduce((fin,cur) =>{
    if (cur.age > 35){
        if (cur.voted === true){
            fin.numOldVotesPeople++
            fin.numOldsPeople++
        } else {
            fin.numOldsPeople++
        }
    } else if (cur.age > 25){
        if (cur.voted === true){
            fin.numMidVotesPeople++
            fin.numMidsPeople++
        } else {
            fin.numMidsPeople++
        }
    } else if (cur.age >= 18){
        if (cur.voted === true){
            fin.numYoungVotes++
            fin.numYoungPeople++
        } else {
            fin.numYoungPeople++
        }
    }
    return fin
},{ numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0
})
console.log(voteResults([
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]))