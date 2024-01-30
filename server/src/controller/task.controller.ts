import { addTodoMysql, deleteTodoMysql, getTodoMysql, updateTodoMysql } from './../services/task.services';
import { Request, Response } from "express";

//lay tat ca
export const getTodo = async(req:Request,res:Response)=>{
    try {
        const result = await getTodoMysql()
        res.status(200).json(result)  
    } catch (error) {
        console.log(error);
    }
}

//them
export const addTodo=async(req:Request,res:Response)=>{ 
    try {
        const {name} = req.body
        await addTodoMysql(String(name))
        res.status(201).json({
            message:"Thêm todo thành công",
        })    
    } catch (error) {
        console.log(error);  
    }
}

//Xoa 
export const deleteTodo = async(req:Request,res:Response)=>{  
    try {
        const {id} = req.params
        await deleteTodoMysql(Number(id))
        res.status(200).json({
            message:"Xoá todo thành công",
        })   
    } catch (error) {
        console.log(error); 
    }
}
//update complete
export const updateTodo = async(req:Request,res:Response)=>{
    try {
        const {id} = req.params
        const {status} = req.body
        await updateTodoMysql(Number(id),status)
        res.status(200).json({
            message:"Update status thành công",
        })      
    } catch (error) {
        console.log(error); 
    }
}
