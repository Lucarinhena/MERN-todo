import { Router } from "express"
import {getTodos, updateTodo, addTodo, deleteTodo } from "../controllers/todos/index"

const router: Router = Router()

router.get("/todos", getTodos)

router.post("/add-todo", addTodo)

router.put("/edit-todo/:id", updateTodo)

router.delete("/delete-todo/:id", deleteTodo)

export default router