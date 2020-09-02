var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception (people,alphabet){
    var forcepted = []
    var capAlphabet = alphabet.toUpperCase()
    var arrayPhabet = capAlphabet.split("")
    for (var i = 0; i < people.length; i++){
        var nameThing = [people[i] + ":"]
        var forcept = nameThing.concat(arrayPhabet)
        forcepted = forcepted.concat(forcept)
    }
    console.log(forcepted)
}

forception(people, alphabet)