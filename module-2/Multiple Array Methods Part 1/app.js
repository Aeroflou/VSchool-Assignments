const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const sortAgeAlph = arr => {
    let newArray = []
    arr.map(item => item.age >= 18 ? newArray.push(item) : null)
    /*arr.map(item => {
        if(item.age >= 18){
            newArray.push(item)
        }
    })*/
    newArray.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1)
    let arrLi = newArray.map(item => "<li>" + item.firstName + " " + item.lastName + " is " + item.age + "</li>")
    return arrLi
}
console.log(sortAgeAlph(peopleArray))