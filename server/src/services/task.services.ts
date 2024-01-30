import database from "../config/config";

//lay tat ca
export const getTodoMysql = async()=>{
    try {
        const [result] = await database.execute("select * from tasks")
        return result
    } catch (error) {
        console.log(error);
    }
}
//them
export const addTodoMysql=async(name:string)=>{
    try {
        const [result] = await database.execute("insert into tasks(name) values (?)",[name])
        return result
    } catch (error) {
        console.log(error); 
    }
}
//Xoa 
export const deleteTodoMysql = async(id:number)=>{
    try {
        const [result] = await database.execute("delete from tasks where id=?",[id])
        return result
    } catch (error) {
        console.log(error);   
    }
}
//update 
export const updateTodoMysql = async(id:number,status:boolean)=>{
    try {
        const [result] = await database.execute("update tasks set status=? where id=?",[status,id])
        return result
    } catch (error) {
        console.log(error);
    }
}
