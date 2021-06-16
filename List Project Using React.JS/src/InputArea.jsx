import React, {useState} from "react";

function InputArea(props){

const [inputText, setInputText] = useState("");

    function handleOnChange(event){
        const addItem = event.target.value;
        setInputText(addItem);
      }

    return(
        <div className="form">
        <input type="text" onChange={handleOnChange}  value={inputText}/>
        <button onClick={() =>{
            props.onAdd(inputText);
            setInputText("");
        }}>
          <span>Add</span>
        </button>
      </div>
    )
}

export default InputArea
