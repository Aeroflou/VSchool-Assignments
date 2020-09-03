const arForm = document.airlineForm

const formAlert = () => {
    const firstName = arForm.firstName.value
    const lastName = arForm.lastName.value
    const age = arForm.age.value
    const gender = arForm.gender.value
    const destination = arForm.destination.value
    const diet = []
    for (let i = 0; i < arForm.diet.length; i++){
        if (arForm.diet[i].checked){
            diet.push(arForm.diet[i].value)
        }
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + destination + "\nDiet: " + diet)
}

arForm.addEventListener("submit", (event) => {
    event.preventDefault()
    formAlert()
})