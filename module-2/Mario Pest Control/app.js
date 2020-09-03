const pestForm = document.marioPestForm

const pestCalc = () => {
    const goomba = pestForm.goombaCount.value
    const bobOmb = pestForm.bobOmbCount.value
    const cheepC = pestForm.cheepCheepCount.value
    const gombCost = goomba * 5
    const bobOmbCost = bobOmb * 7
    const cheepCost = cheepC * 11
    const allTotal = gombCost + bobOmbCost + cheepCost
    alert("With a total of: \n" + gombCost + " for Goombas\n" + bobOmbCost + " for Bob-ombs\n" + cheepCost + " for Cheep Cheeps\nYou owe Mario " + allTotal + " Coins.")
}

pestForm.addEventListener("submit", (event) => {
    event.preventDefault()
    pestCalc()
})