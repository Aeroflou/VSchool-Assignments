const page = "https://api.vschool.io/austinbyas/todo"
const clearTodo = () => {
    const el = document.getElementById("todos")
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}
const listData = data => {
    clearTodo()
    for(let i = 0; i < data.length; i++){
        const div = document.createElement('div')
        let title = ""
        let desc = ""
        let price = ""
        const br = document.createElement('br')
        const br2 = document.createElement('br')
        const br3 = document.createElement('br')
        if(data[i].completed){
            title = document.createElement('strike')
            desc = document.createElement('strike')
            price = document.createElement('strike')
        } else {
            title = document.createElement('p')
            desc = document.createElement('p')
            price = document.createElement('p')
        }
        title.textContent = `Title: ${data[i].title}`
        desc.textContent = `Description: ${data[i].description}`
        price.textContent = `Price: ${data[i].price}`
        let img = ""
        if (data[i].imgUrl != undefined){
            img = `<img src=${data[i].imgUrl}/>`
        }
        div.appendChild(title)
        if(data[i].completed){
            div.appendChild(br)
        }
        div.appendChild(desc)
        if(data[i].completed){
            div.appendChild(br2)
        }
        div.appendChild(price)
        if(data[i].completed){
            div.appendChild(br3)
        }
        div.innerHTML += img
        const completeEl = `<input id="${i}" type="checkbox"/>`
        div.innerHTML += completeEl
        const checkbox = div.lastChild
        if(data[i].completed){
            checkbox.checked = true
        }
        checkbox.addEventListener("click", () => {
            const comp = {
                completed: checkbox.checked
            }
            axios.put(`${page}/${data[i]._id}`,comp)
                .then(res => {
                    console.log(res.data)
                    displayTodo()
                })
                .catch(err => console.log(err))
        })
        const del = document.createElement('button')
        del.textContent = "X"
        div.append(del)
        del.addEventListener("click", () => {
            axios.delete(`${page}/${data[i]._id}`)
            div.remove()
        })
        document.getElementById('todos').appendChild(div)
    }
}
const displayTodo = () => {
    axios.get(page)
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}
displayTodo()

const todoForm = document.addTodo
addTodo.addEventListener("submit",event => {
    event.preventDefault()
    const todoObj = {
        title: todoForm.title.value,
        description: todoForm.desc.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgurl.value
    }
    axios.post(page,todoObj)
        .then(res => {
            console.log(res.data)
            displayTodo()
        })
        .catch(err => console.log(err))
    todoForm.title.value = ""
    todoForm.desc.value = ""
    todoForm.price.value = ""
    todoForm.imgurl.value = ""
})