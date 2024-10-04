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

    return (
        <>
        {
            text !== "" &&
            text.charAt(0)!== " "&&
            <li key={id} className="li">
                <span className={checked ? "check": "not-check"}> {text} </span>
                <div className="sub-btn">
                    <Button title="Del" onClick={() => handleDelBtn(text)} className="sub-button"/>
                    <Button title="👍" onClick={() => handleCheckBtn(text)} className="sub-button"/>
                </div>   
         
            </li>
        }
        </>
    )
}



export default TaskList