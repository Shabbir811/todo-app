import Button from "../Button/Button"
import { ChangeEvent ,FormEvent,useState} from "react"
import "./TodoForm.css"

interface TodoFormProps  {
    handleClickAddBtn : (inputVal:{id: string,text: string,isChecked: boolean, })=> void

}

function TodoForm (props:TodoFormProps){
    const {handleClickAddBtn} = props
    const [inputValue , setInputValue] = useState<{id:string,text:string,isChecked:boolean} >({id:"",text:"",isChecked:false});
    
    const handleInputValue = (event:ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value;
        setInputValue({id:value,text:value,isChecked:false})


    }
    const handleForm = (event:FormEvent)=>{
        event.preventDefault()
        handleClickAddBtn(inputValue)  //as a prop
        setInputValue({id:"",text:"",isChecked:false})

    }
    return(
        <form onSubmit={handleForm}>
            <div className="input-div">
                <input
                type="text" 
                className="todo-input" 
                placeholder="write some..."
                value={inputValue.text} 
                onChange={handleInputValue} 
                
                />
            </div>
            
            <div className="btn-div">
                <Button  type="submit" title="➕" className="main-button" />
            </div>

        </form>
    )
}

export default TodoForm