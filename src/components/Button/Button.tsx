

interface ButtonProps {
    title:string,
    className?: string,
    onClick?:()=> void,
    type?:"submit"


}

function Button (props:ButtonProps){

    return(
        <button className={props.className} onClick={props.onClick} type={props.type} >{props.title} </button>
    )

}

export default Button