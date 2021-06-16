import React, {useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function ToDoItem(props){

  const [isDone, setIsDone] = useState(false);

  function handleIdDone(){
    setIsDone(!isDone);
    // console.log(isDone);
  }

    return(
        <div className="todo-item" >

            <li onClick={handleIdDone} style={{textDecoration: isDone ? "line-through" : "none"}}>{props.item}</li>
            <button
              onClick={()=>{props.onChecked(props.id)}} >
              <DeleteIcon />
            </button>


        </div>
    )
}

export default ToDoItem
