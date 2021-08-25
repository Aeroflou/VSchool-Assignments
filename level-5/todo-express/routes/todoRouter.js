const express = require("express")
const todoRouter = express.Router()
const {v4: uuid} = require("uuid")

const todos = [
    {name: "Dishes", description: "Wash and put away dishes", imageUrl: "", completed: false, _id: uuid()},
    {name: "Laundry", description: "Wash and put away clothes", imageUrl: "", completed: false, _id: uuid()},
    {name: "Cook", description: "Make some good food for future meals", imageUrl: "", completed: true, _id: uuid()},
    {name: "Sustain 'Him'", description: "Feed 'Him'...", imageUrl: "", completed: false, _id: uuid()},
    {name: "Make Bed", description: "Make the bed", imageUrl: "", completed: true, _id: uuid()}
]

todoRouter.get("/:todoId", (req, res) => {
    const todo = todos.find(todo => todo._id === req.params.todoId)
    res.send(todo)
})

todoRouter.route("/")
    .get((req, res) => {
        res.send(todos)
    })
    .post((req,res) => {
        const newTodo = req.body
        newTodo._id = uuid()
        todos.push(newTodo)
        res.send(`A new todo has been added!`)
    })
/*    .put((req, res) => {
        const todoIndex = todos.map(todo => {
            if (req.body._id === todo._id){
                return(todos.indexOf(todo))
            }
        })
        const newTodo = req.body
        newTodo._id = uuid()
        todos[todoIndex] = newTodo
        res.send(`Todo updated!`)
    })
    .delete((req, res) => {
        const todo = todos.map(todo => {
            if (req.body._id === todo._id){
                return(todo)
            }
        })
        todos.splice(todos.indexOf(todo), 1)
        res.send(`Item removed from todo list!`)
    })*/

todoRouter.put("/:todoId", (req, res) => {
    const todoIndex = todos.findIndex(todo => todo._id === req.params.todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    console.log(updatedTodo)
    res.send("Todo has been updated!")
})

todoRouter.delete("/:todoId", (req, res) => {
    const todoIndex = todos.findIndex(todo => todo._id === req.params.todoId)
    todos.splice(todoIndex, 1)
    res.send(`Todo with the id ${req.params.todoId} has been deleted!`)
})

module.exports = todoRouter