import "./Todo.css"
import TodoForm from "../TodoForm/TodoForm"
import TaskList from "../TaskList/TaskList";
import Button from "../Button/Button";
import { useState } from "react";


function Todo() {
    //states
    const [taskList, setTaskList] = useState< {id: string; text: string; isChecked: boolean;}[]| []> (()=>{
        const ls = localStorage.getItem("myTodo");
        if(ls){
            return JSON.parse(ls);
        }else{
            return [{id:"", text:"", isChecked:false}]
        }
    } )
    // handlers
    const handleAddTask = ({id,text,isChecked}:{id:string, text:string, isChecked:boolean} ) => {
        
        const matchTodoText = taskList.find((task)=> task.text === text);
        if (!text){
            return
        }else if(matchTodoText){
                return

           }else if(taskList[0].text === ""){
            taskList.shift()
            
        }
            setTaskList(prev=> [...prev,{id ,text, isChecked}]);
            
    }

    localStorage.setItem("myTodo",JSON.stringify(taskList))



    const handleDelTask = (text:string)=>{
        const updateTaskList = taskList.filter((task)=>task.text !== text);
        setTaskList(updateTaskList)
        

    }

    const handleCompetedTask = (text:string)=>{
       
        const updateTask = taskList.map(task=>{
            if(task.text === text){
                return {...task, isChecked:!task.isChecked }
            }else{
                return task
            }
        })

        setTaskList(updateTask)
        
    }

    const handleClearAllBtn = () => {
        setTaskList([{id:"", text:"", isChecked:false}])
    }

    return (
        <>
            <div className="todo-container">
                <h1 style={{ textAlign: "center", fontSize: "6rem", color: "black", textDecoration: "underLine", margin: "3rem 0px" }}>To Do App</h1>

                <TodoForm handleClickAddBtn={handleAddTask} />


                <div className="task-list">
                    <h1 style={{ textAlign: "center", fontSize: "4rem", color: "black", textDecoration: "underLine overline", margin: "3rem 0px" }}>Tasks List</h1>
                    <div>
                        <ul>
                            {taskList.map((task) => {
                                return (
                                    <>
                                    <TaskList 
                                     id={task.id}
                                     text={task.text}
                                     checked={task.isChecked}
                                     handleDelBtn={handleDelTask} 
                                     handleCheckBtn={handleCompetedTask}
                                    />
                                    </>

                                )
                            })
                            }
                        </ul>
                    

                    </div>
                </div>
                <Button title="Clear All" className="main-button" onClick={()=>handleClearAllBtn()} />

            </div>
            

        </>
    )
    // we add our array on local storage:
}

export default Todo
