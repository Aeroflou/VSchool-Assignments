//1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for (var o = 0; o <= officeItems.length;o++){
    if (o == officeItems.length){
        console.log(o)
    }
}

//2
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
] 

for (var p = 0; p < peopleWhoWantToSeeMadMaxFuryRoad.length; p++){
    var name = peopleWhoWantToSeeMadMaxFuryRoad[p].name
    var age = peopleWhoWantToSeeMadMaxFuryRoad[p].age
    var gender = peopleWhoWantToSeeMadMaxFuryRoad[p].gender
    if (age >= 18){
        if (gender == "male"){
            console.log(name + " is old enough, he can see Mad Max.")
        } else {
            console.log(name + " is old enough, she can see Mad Max.")
        }
    } else {
        if (gender == "male"){
            console.log(name + " is not old enough to watch Mad Max. Don't let him in.")
        } else {
            console.log(name + " is not old enough to watch Mad Max. Don't let her in.")
        }
    }
}

//3
//var arr = [2, 5, 435, 4, 3] // "The light is on"
//var arr = [1, 1, 1, 1, 3]   // "The light is on"
var arr = [9, 3, 4, 2]      // "The light is off"

var light = "off"

function switchLight(){
    if (light == "off"){
        light = "on"
    } else {
        light = "off"
    }
}

for (var i = 0; i < arr.length; i++){
    for (var n = 0; n < arr[i]; n++){
        switchLight()
    }
    if (i == arr.length - 1){
        console.log("The light is " + light)
    }
}