'use strict'
var monitor = require("../helpers/monitor")
var todos = [
    {
      todoId:0,
      todo:"Get More Milk",
      author: "Jim",
      createdDate: new Date(),
      dueDate: new Date(),
      completed:true
    },
    {
      todoId:0,
      todo:"Get More Beer",
      author: "Helen",
      createdDate: new Date(),
      dueDate: new Date(),
      completed:false
    }
  ]

function GetAllTodos(req, res, next, err){
    var start = monitor(); 
    if(err){
      res.send(JSON.stringify(err))
    }
    else{
      res.json(todos)
      monitor(start, "service : GetAllTodos")
    }
}


module.exports = { GetAllTodos : GetAllTodos}
