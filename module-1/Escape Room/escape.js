const readlineSync = require("readline-sync")
var examined = 0
var action = 0
var key = 0
function escapeintro(){
    console.log("You awake to a dim room, barely able to see anything besides a hole in the wall that's even darker than the rest of the room, and a light from under a door.")
    console.log("Hearing voices from outside the door and being in an unfamiliar place, you are spurred to action, not wanting to wait and see what happens should you remain inactive.")
    console.log("What do you do?")
    console.log("1. Examine the darkened hole.")
    console.log("2. Open the door.")
    action = readlineSync.question()
    if (action == 1){
        console.log("Upon examing the hole further you realise you could stick your arm in but not much else would fit.")
        examined = 1
        console.log("What do you do?")
        console.log("1. Stick your arm in.")
        console.log("2. Walk away.")
        action = readlineSync.question()
        if (action == 1){
            console.log("You stick your arm in as far as you can. After feeling around a bit you feel a prick on one of your fingers.")
            console.log("Before you can even yank your arm out in suprsise, you collapse, the poision setting in.")
            console.log("GAME OVER")
            console.log("Try again?")
            console.log("1. Yes")
            console.log("2. No")
            action = readlineSync.question()
            if (action == 1){
                escapeintro()
            } else if (action == 2){
                console.log("Alrighty then, thanks for playing!")
            } else {
                console.log("What? Please enter the number corresponding to whether you wany to retry or not.")
            }
        } else if (action == 2){
            console.log("You decide it's best to stay away from there for now.")
            escapenokey()
        } else {
            console.log("I'm sorry? Please enter the number corresponding to the action that you want to do.")
        }
    } else if(action == 2){
        console.log("As you walk over to try the door you realise it's locked. You'll need a key.")
        escape()
    } else {
        console.log("I'm sorry? Please enter the number corresponding to the action that you want to do.")
        escapeintro()
    }
}

function escapenokey(){
    console.log("The voices outside the door are still there.")
    console.log("What do you do?")
    console.log("1. Go to the hole.")
    console.log("2. Open the door.")
    action = readlineSync.question()
    if (action == 1){
        console.log("You could stick your arm in, but not much else would fit.")
        console.log("What do you do?")
        console.log("1. Stick your arm in.")
        console.log("2. Walk away.")
        action = readlineSync.question()
        if (action == 1){
            console.log("You stick your arm in as far as you can. After feeling around a bit you feel a prick on one of your fingers.")
            console.log("Before you can even yank your arm out in suprsise, you collapse, the poision setting in.")
            console.log("GAME OVER")
            console.log("Try again?")
            console.log("1. Yes")
            console.log("2. No")
            action = readlineSync.question()
            if (action == 1){
                escapeintro()
            } else if (action == 2){
                console.log("Alrighty then, thanks for playing!")
            } else {
                console.log("What? Please enter the number corresponding to whether you wany to retry or not.")
                escapenokey()
            }
        } else if (action == 2){
            console.log("You decide it's best to stay away from there for now.")
            escapenokey()
        } else {
            console.log("I'm sorry? Please enter the number corresponding to the action that you want to do.")
        }
    } else if(action == 2){
        console.log("As you walk over to try the door you realise it's locked. You'll need a key.")
        escape()
    } else {
        console.log("I'm sorry? Please enter the number corresponding to the action that you want to do.")
        escapenokey()
    }
}

function escape(){
    console.log("The voices outside the door are still there.")
    console.log("What do you do?")
    if (examined == 1){
        console.log("1. Go to the hole.")
    } else {
        console.log("1. Examine the darkened hole.")
    }
    console.log("2. Open the door.")
    console.log("3. Look for the key.")
    action = readlineSync.question()
    if (action == 1){
        if (examined == 1){
            console.log("You could stick your arm in, but not much else would fit.")
            console.log("What do you do?")
            console.log("1. Stick your arm in.")
            console.log("2. Walk away.")
            action = readlineSync.question()
            if (action == 1){
                console.log("You stick your arm in as far as you can. After feeling around a bit you feel a prick on one of your fingers.")
                console.log("Before you can even yank your arm out in suprsise, you collapse, the poision setting in.")
                console.log("GAME OVER")
                console.log("Try again?")
                console.log("1. Yes")
                console.log("2. No")
                action = readlineSync.question()
                if (action == 1){
                    escapeintro()
                } else if (action == 2){
                    console.log("Alrighty then, thanks for playing!")
                } else {
                    console.log("What? Please enter the number corresponding to whether you wany to retry or not.")
                    escape()
                }
            } else if (action == 2){
                console.log("You decide it's best to stay away from there for now.")
                escape()
            } else {
                console.log("I'm sorry? Please enter the number corresponding to the action that you want to do.")
                escape()
            }
        } else {
            console.log("Upon examing the hole further you realise you could stick your arm in but not much else would fit.")
            examined = 1
            console.log("What do you do?")
            console.log("1. Stick your arm in.")
            console.log("2. Walk away.")
            action = readlineSync.question()
            if (action == 1){
                console.log("You stick your arm in as far as you can. After feeling around a bit you feel a prick on one of your fingers.")
                console.log("Before you can even yank your arm out in suprsise, you collapse, the poision setting in.")
                console.log("GAME OVER")
                console.log("Try again?")
                console.log("1. Yes")
                console.log("2. No")
                action = readlineSync.question()
                if (action == 1){
                    escapeintro()
                } else if (action == 2){
                    console.log("Alrighty then, thanks for playing!")
                } else {
                    console.log("What? Please enter the number corresponding to whether you wany to retry or not.")
                    escapeintro()
                }
            } else if (action == 2){
                console.log("You decide it's best to stay away from there for now.")
                escapenokey()
            } else {
                console.log("I'm sorry? Please enter the number corresponding to the action that you want to do.")
                escape
            }
        }
    } else if (action == 2){
        if (key == 1){
            console.log("You walk to the door with key in hand and after fumbling around with the door for a bit you get it unlocked.")
            console.log("Bracing yourself to either run from or fight your supposed kindappers outisde you open the door.")
            console.log("You are greeted by nothing, no one is outside the room and there is nothing to be heard.")
            console.log("YOU... WIN?")
            console.log("Play again?")
            console.log("1. Yes")
            console.log("2. No")
            action = readlineSync.question()
            if (action == 1){
                console.log ("After walking around the empty space for a bit you begin to feel really tired and fall asleep.")
                escapeintro()
            } else if (action == 2){
                console.log("Alrighty then, thanks for playing!")
            } else {
                console.log("What? Please enter the number corresponding to whether you wany to retry or not.")
                escape()
            }
        } else {
            console.log ("The door is locked. You still need the key.")
        }
    } else if (action == 3){
        if (key == 0){
            console.log("After searching around a bit your foot brushes over something cold.")
            console.log("It's the key.")
            key = 1
            escape()
        } else {
            console.log("You already have the key you need to get out of here.")
            escape()
        }
    } else {
        console.log("I'm sorry? Please enter the number corresponding to the action that you want to do.")
        escape
    }
}

escapeintro()