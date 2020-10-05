const xhr = new XMLHttpRequest()
xhr.open("GET","https://api.vschool.io/pokemon",true)
xhr.send()
let pokemonList = []
xhr.onreadystatechange = () =>{
    if(xhr.readyState == 4 && xhr.status == 200){
        json = JSON.parse(xhr.responseText)
        json.objects[0].pokemon.map(pokemon => pokemonList.push(pokemon))
        let pokeDex = document.getElementById('pokemon')
        pokemonList.map(pokeThing => {
            let li = document.createElement('li')
            li.textContent = pokeThing.name
            pokeDex.append(li)
        })
    }
}