import { useState } from "react";
import Button from "../Button/Button";
import "./TaskList.css"

interface TaskListProps {
    handleDelBtn: (text: string) => void,
    handleCheckBtn:(text:string) => void,
    text: string,
    id:string,
    checked:boolean
 
}

function TaskList(props: TaskListProps) {
    const { handleDelBtn,handleCheckBtn, text, id,  checked } = props;


    const [isEditable , setIsEditable] = useState(false)
    const [bgcolor , setBgColor] = useState("")

    const handleEditBtn = ()=>{
        setIsEditable((prev)=> !prev )
        if(bgcolor === ""){
            setBgColor("span-color")
        }else{
            setBgColor("")
        }
        
    }

    return (
        <>
        {
            text !== "" &&
            text.charAt(0)!== " "&&
            <li key={id} className={`li ${bgcolor} `} >

                <span  
                    className={checked ? "check": "not-check"}
                    contentEditable={isEditable}>
                     {text} 
                </span>

                <div className="sub-btn">
                    <Button title="🗑️" onClick={() => handleDelBtn(text)} className="sub-button"/>
                    <Button title={checked ?"🚫":"✅" } onClick={() => handleCheckBtn(text)} className="sub-button"/>
                    <Button title={isEditable ? "💾": "📝"} onClick={handleEditBtn} className="sub-button" />
                </div>   
         
            </li>
        }
        </>
    )
}



export default TaskList