const add = (a, b) => {
    let ans = a + b
    return ans
}
try {
    let sum = add("1","2")
    if (typeof(sum) != "number"){
        throw new Error("This is not a number")
    }
    console.log(sum)
}
catch(err){
    console.log(err)
}

const user = {username: "paulBlart", password: "mallCop123"}
const login = (un, pw) => {
    if (un == user.username){
        if(pw == user.password){
            return "login succesful"
        } else {
            return "username and password do not match"
        }
    } else {
        return "user does not exist"
    }
}
try {
    let logResult = login("paulBlart", "mallCop123")
    if (logResult == "username and password do not match"){
        throw new Error("error message or something")
    } else if(logResult == "user does not exist"){
        throw new Error("error message or something")
    }
    console.log(logResult)
}
catch(err){
    console.log(err)
}
try {
    let logResult = login("paulbart", "mallenforcement321")
    if (logResult == "username and password do not match"){
        throw new Error("error message or something")
    } else if(logResult == "user does not exist"){
        throw new Error("error message or something")
    }
    console.log(logResult)
}
catch(err){
    console.log(err)
}