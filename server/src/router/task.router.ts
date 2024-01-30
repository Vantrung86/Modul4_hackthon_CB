import { addTodo, deleteTodo, getTodo, updateTodo } from "../controller/task.controller"

const taskRouter=(app:any)=>{
    app.get("/api/v1/todo",getTodo);
    app.post("/api/v1/todo",addTodo);
    app.put("/api/v1/todo/:id",updateTodo);
    app.delete("/api/v1/todo/:id",deleteTodo)
}
export default taskRouter