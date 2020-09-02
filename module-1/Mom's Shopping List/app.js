const add = document.addItem
var item = add.title.value
var liNum = 1
function addItem(){
    //document.getElementById("list").innerHTML += "<li id='listItem"+liNum+"' class='listItems'></li>"
    const li = document.createElement('li')
    const div = document.createElement('div')
    item = add.title.value
    div.textContent = item
    console.log(document.getElementById("list"))
    li.append(div)
    document.getElementById('list').append(li)
    //document.getElementById("listItem"+liNum).innerHTML += "<button id='delete"+liNum+"'>X</button>"
    const del = document.createElement('button')
    li.append(del)
    del.textContent = "X"
    add.title.value = ""
    //const del = document.getElementById("delete"+liNum)
    liNum++
    del.addEventListener("click", function(event){
        li.remove()
    })
}

add.addEventListener("submit", function(event){
    event.preventDefault()
    addItem()
})
var string = "button"
console.log(string.indexOf("u"))

var array = ["blue","red","gree","yellow"]
array.splice(1,2,"purple")
console.log(array)