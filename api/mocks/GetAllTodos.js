'use strict'

function GetAllTodos(req, res, next){
  return res.json([
    {
      todoId:0,
      todo:"Get Milk",
      author: "Jim",
      createdDate: new Date(),
      dueDate: new Date(),
      completed:true
    },
    {
      todoId:0,
      todo:"Get Beer",
      author: "Helen",
      createdDate: new Date(),
      dueDate: new Date(),
      completed:false
    }
  ])
}

module.exports = {GetAllTodos:GetAllTodos};