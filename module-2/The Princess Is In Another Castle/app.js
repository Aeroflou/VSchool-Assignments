class Player{
    constructor(name,coins,status,star,game){
        this.name = name
        this.totalCoins = coins
        this.status = status
        this.hasStar = star
        this.gameActive = game
    }
    setName(namePicked){
        this.name = namePicked
    }
    gotHit(){
        if(this.hasStar === true){
            console.log("Star Protected You!")
            this.hasStar = false
        } else if(this.status === "Powered Up"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Small"
        } else if(this.status === "Small"){
            this.status = "Dead"
            this.gameActive = false
        }
    }
    gotPowerup(){
        if(this.status === "Small"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Powered Up"
        } else if(this.status === "Powered Up"){
            console.log("You Got A Star!")
            this.hasStar = true
        }
    }
    addCoin(){
        this.totalCoins++
    }
    printPlayer(){
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\n`)
    }
    gameover(){
        console.log("You Have Died, Game Over!")
        this.printPlayer()
        console.log(`Total Score: ${this.totalCoins}`)
    }
}
const rng = function(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const luigi = new Player("Luigi",0,"Big",false,true)
const game = setInterval(() => {
    let turn = rng(1,3)
    if(turn === 1){
        luigi.gotHit()
    } else if(turn === 2){
        luigi.gotPowerup()
    } else if(turn === 3){
        luigi.addCoin()
    }
    luigi.printPlayer()
    if(luigi.gameActive === false){
        luigi.gameover()
        stop(game)
    }
},500)
const stop = thing => clearInterval(thing)