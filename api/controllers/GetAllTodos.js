'use strict'

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
    if(err){
      res.send(JSON.stringify(err))
    }
    else{
      res.json(todos)
    }
}


module.exports = { GetAllTodos : GetAllTodos}
