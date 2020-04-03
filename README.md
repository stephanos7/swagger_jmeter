# PoC: create Swagger definitions for an API to be tested with JMeter

A quick proof of concept to test swagger definitions and mocking, and to run it against a local instance of JMeter

## Project Instructions:

dev mode:
```
  swagger project start 
```
mock mode:
```
  swagger project start -m
```
swagger editor:
```
  swagger project edit
```

## Endpoints

1. root "/"

## Operations

**1. GetAllTodos:** 

*GET:* Returns all TODOs avaialble in ElasticSearch (or) DB. Aiming to connect with ES to further learn about the stack but for now this is a static operation returning from a JS array. 

**2. CreateTodo:**

*POST:* Creates new TODO objects - This is not currently implemented as JMeter testing will only take place on GET operations for now.

## Model Definitions

```javascript 
Todo {
  todoId:	integer
  todoTitle:	string
  dateCreated:	string
  author:	string
  dueDate:	string
  completed:	boolean
}
```









