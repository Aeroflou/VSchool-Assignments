const readline = require("readline-sync")
let choice = 0
var wham = false
let hit = 0
console.log("Hello there Player! Welcome, to the world of Faradril.")
console.log("Many have been tried and tested in this beautiful but cruel land.")
console.log("Today you will be put through a test of your own.")
console.log("Before we get to any of that though, I must ask you.")
var playerName = readline.question("What is your name?: ")
console.log("")

//
//items
//
const heavyCoat = {
    itemName: "Heavy Coat",
    evasion:-10,
    defense:10,
    luck:0,
    desc: "This coat is heavy and hard to move around in, but it should help absorb some damage."
}
const lightVest = {
    itemName: "Light Vest",
    evasion:30,
    defense:0,
    luck:5,
    desc: "This vest seems like it'll hardly do anything if you get hit, you can move around well with it on though."
}
const normalClothes = {
    itemName: "Normal Clothes",
    evasion:0,
    defense:5,
    luck:5,
    desc: "Everyday wear, it might actually be able to absorb a little bit of damage."
}
const pajamas = {
    itemName: "Pajamas",
    evasion: 100,
    defense: 100,
    luck: 100,
    desc: "You must be dreaming."
}
const sword = {
    itemName: "Sword",
    accuracy:80,
    damage:[15,20],
    critical:0,
    desc: "A simple sword."
}
const dagger = {
    itemName: "Dagger",
    accuracy:100,
    damage:[10,15],
    critical:40,
    desc: "Light and sharp."
}
const magicSpellbook = {
    itemName: "Magic Spellbook",
    accuracy:50,
    damage:[20,30],
    critical:0,
    desc: "Knowledge is your weapon!"
}
const pillow = {
    itemName: "Pillow",
    accuracy:200,
    damage:[50,100],
    critical:100,
    desc: "How can something so soft hurt so much?"
}

//
//enemies
//
const orc = {
    health:40,
    damage:[10,15],
    defense:5,
    accuracy:80,
    evasion:0,
    critical:0,
    luck:0,
    encounter: "An orc blocks your path!",
    deathMessage: "As you fall before the enemy the orc looks down at you with pity, before leaving you to your fate alone.",
    reward: "Busted Sword"
}
const revenant = {
    health: 60,
    damage:[30,40],
    defense:10,
    accuracy:50,
    evasion:-20,
    critical:0,
    luck:-10,
    encounter: "An undead knight is standing in the road...",
    deathMessage: "Unable to defend yourself any longer, you fall. Soon, you are added to the ranks of undead that plague the land.",
    reward: "Possesed Helm"
}
const goblin = {
    health:30,
    damage:[5,10],
    defense:0,
    accuracy:90,
    evasion:30,
    critical:10,
    luck:5,
    encounter: "A goblin is causing mischief!",
    deathMessage: "The goblin defeats you and brings you to it's cave, where others reside, it seems you'll be dinner tonight.",
    reward: "Bone Necklace"
}

//
//idk some functions
//
var player = {
    maxHealth:100,
    currentHealth:100,
    weaponEquipped:"",
    armorEquipped:"",
    inventory:[]
}
const equipArmor = function (armor){
    player.armorEquipped = armor
    player.defense = armor.defense
    player.evasion = armor.evasion
    player.luck = armor.luck
}
const equipWeapon = function (weapon){
    player.weaponEquipped = weapon
    player.damage = weapon.damage
    player.accuracy = weapon.accuracy
    player.critical = weapon.critical
}
const introScene = function(){
    console.log("The ground begins to tremble, and outside a panic begins to rise.")
    console.log("This is what wakes you up. You quickly begin to get dressed.")
    console.log("What will you wear?")
    console.log("1. Normal Clothes")
    console.log("2. Heavy Coat")
    console.log("3. Light Vest")
    let choice = readline.question("")
    if (choice == 1){
        equipArmor(normalClothes)
    } else if (choice == 2) {
        equipArmor(heavyCoat)
    } else if (choice == 3) {
        equipArmor(lightVest)
    } else if (choice == "I'm tired..."){
        equipArmor(pajamas)
    } else {
        equipArmor(normalClothes)
    }
    console.log("As you walk outsied the village cheif walks over to you.")
    console.log('"Please! '  + playerName + ' you must help us!"')
    console.log('"Monsters are attacking the village!"')
    console.log("You agree to help so he takes you to an armory, where you have a selection of weapons.")
    if(player.armorEquipped == pajamas){
        console.log("You shake your head and pull a pillow out of your pajamas.")
        console.log("The village cheif gives you a bit of a wierd look but overall trusts your sleepy judgment.")
        equipWeapon(pillow)
    } else {
        console.log("What weapon will you grab?")
        console.log("1. Sword")
        console.log("2. Dagger")
        console.log("3. Magic Spellbook")
        let choice = readline.question("")
        if (choice == 1){
            equipWeapon(sword)
        } else if (choice == 2) {
            equipWeapon(dagger)
        } else if (choice == 3) {
            equipWeapon(magicSpellbook)
        } else {
            equipWeapon(sword)
        }
    }
    console.log("After choosing a weapon the village cheif takes you to the front gates to see you off.")
    console.log('"Good luck, and come back safe."')
    console.log("")
    takeBreak()
}
const showInventory = function(){
    console.log("Name: " + playerName)
    console.log("HP: " + player.maxHealth + "/" + player.currentHealth)
    console.log("You are wearing " + player.armorEquipped.itemName)
    console.log("You are holding a " + player.weaponEquipped.itemName)
    console.log(player.inventory)
    takeBreak()
}

//
//Random Number Generator
//
const rng = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//
//Battle System
//
const hitCheck = function(char, opponent){
    let charHit = char.accuracy
    let oppAvoid = opponent.evasion
    let charCrit = char.critical
    let oppLuck = opponent.luck
    let target = charHit - oppAvoid
    let critTarget = charCrit - oppLuck
    let h = rng(1, 100)
    if(h <= target){
        if (h <= critTarget){
            return 3
        } else {
            return 2
        }
    } else {
        return 1
    }
}
const damageDealt = function(char, opponent, crit){
    let damage = rng(char.damage[0],char.damage[1])
    let damageTotal = damage - opponent.defense
    if (crit == 3){
        damageTotal = damageTotal * 2
        return damageTotal
    } else {
        return damageTotal
    }
}
const whamify = function(crit){
    return crit == 3
}
const battle = function(enemy){
    console.log(enemy.encounter)
    let battleOutcome = 0
    let enemyHealth = enemy.health
    var wham = false
    let hit = 0
    let fled = false
    for (let i = 1; i != -1;){
        //the enemy attacks first
        hit = hitCheck(enemy, player)
        if (hit == 1){
            console.log("You avoided the hit!")
        } else {
            let damage = damageDealt(enemy, player, hit)
            wham = whamify(hit)
            if (wham == false){
                player.currentHealth = player.currentHealth - damage
                console.log("They did " + damage + " points of damage to you.")
                console.log("You have " + player.currentHealth + " remaining.")
            } else {
                player.currentHealth = player.currentHealth - damage
                console.log("WHAM!")
                console.log("Yeouch! they did " + damage + " damage!")
                console.log("You have " + player.currentHealth + " remaining. Be careful!")
            }
        }
        console.log("")
        //then player
        console.log("What do you do?")
        console.log("1. Attack   2. Flee")
        choice = readline.question("")
        if (choice == 1){
            hit = hitCheck(player, enemy)
            if (hit == 1){
                console.log("You missed...")
            } else {
                let damage = damageDealt(player, enemy, hit)
                wham = whamify(hit)
                if (wham == false){
                    enemyHealth = enemyHealth - damage
                    console.log("You hit, dealing " + damage + " points of damage.")
                    console.log(enemyHealth + " health remains.")
                } else {
                    enemyHealth = enemyHealth - damage
                    console.log("WHAM!")
                    console.log("That hit was especially effective! It dealt " + damage + " damage!")
                    console.log(enemyHealth + " health remains! You've got this!")
                }
            }
        } else if (choice == 2){
            let fleeChance = rng(1,2)
            if (fleeChance == 1){
                console.log("You start running.")
                fled = true
            } else {
                console.log("You couldn't get away...")
            }
        } else {
            let hit = hitCheck(player, enemy)
            if (hit == 1){
                console.log("You missed...")
            } else {
                let damage = damageDealt(player, enemy, hit)
                wham = whamify(hit)
                if (wham == false){
                    enemyHealth = enemyHealth - damage
                    console.log("You hit, dealing " + damage + " points of damage.")
                    console.log(enemyHealth + " health remains.")
                } else {
                    enemyHealth = enemyHealth - damage
                    console.log("WHAM!")
                    console.log("That hit was especially effective! It dealt " + damage + " damage!")
                    console.log(enemyHealth + " health remains! You've got this!")
                }
            }
        }
        console.log("")
        if(player.currentHealth <= 0){
            battleOutcome = 3
            i = -1
        } else if (fled == true){
            battleOutcome = 2
            i = -1
        } else if (enemyHealth <= 0){
            battleOutcome = 1
            i = -1
        }
        console.log("")
    }
    if (battleOutcome == 1){
        console.log("The enemy falls before you.")
        console.log("You got " + enemy.reward + "!")
        player.inventory.push(enemy.reward)
        console.log("You spent some time to recover.")
        player.currentHealth = player.currentHealth + rng(20,50)
        if (player.currentHealth > player.maxHealth){
            player.currentHealth = player.maxHealth
        }
        console.log("You have " + player.currentHealth + " health.")
        console.log("")
        takeBreak()
    } else if (battleOutcome == 2){
        console.log("You sucessfuly escape.")
        console.log("")
        takeBreak()
    } else {
        console.log("")
        console.log(enemy.deathMessage)
        console.log("")
        console.log(playerName + " has died...")
        console.log("GAME OVER")
    }
}

//
//walking
//
const walk = function(){
    console.log("You move forward.")
    console.log("")
    let randomEncounter = rng(1,4)
    if (randomEncounter == 1){
        let enemyEncounter = rng(1,3)
        if (enemyEncounter == 1){
            battle(orc)
        } else if (enemyEncounter == 2){
            battle(revenant)
        } else {
            battle(goblin)
        }
    } else {
        console.log("You progress without issue.")
        console.log("")
        takeBreak()
    }
}
const takeBreak = function(){
    console.log('Enter "w" to go forward, enter "Print" to display your inventory. If you are done and want to conclude the story enter "Finish".')
    choice = readline.question("")
    console.log("")
    if (choice == "w"){
        walk()
    } else if (choice == "Print"){
        showInventory()
    } else if (choice == "Finish"){
        console.log("Oh? This is the end for you?")
        console.log("Alright then, I'll summarise the rest of the tale for you then.")
        console.log("")
        console.log(playerName + " pressed onward on their perilous journey.")
        console.log("They fought many diffucult and even undiscovered monsters. Dragons too. Don't forget about the dragons.")
        console.log("So, in the end they saved their village and lived a hapily ever after.")
        console.log("")
        console.log("Well, that's it.")
        console.log("Thank you for playing!")
    } else {
        console.log("???")
        takeBreak()
    }
}
//
//game run
//

introScene()