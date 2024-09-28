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
    const { handleDelBtn,handleCheckBtn,id, text,  checked } = props;

    return (
        <li key={id} className="li">
             {text!==""?<><span className={checked ? "check": "not-check"}>{text}</span>
            <div className="sub-btn">
                <Button title="Del" onClick={() => handleDelBtn(text)} className="sub-button"/>
                <Button title="👍" onClick={() => handleCheckBtn(text)} className="sub-button"/>
            </div></>
            :<span className="empty-span">You Don't Have Any <strong>Task</strong></span>}
        </li>
    )
}



export default TaskList