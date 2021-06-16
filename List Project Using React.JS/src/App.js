import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

const [arrayItem, setArrayItem] = useState([]);

function addItem(inputText){
  setArrayItem(prevItem => {
    return[...prevItem, inputText]
  })

}

function deleteItem(id){
 setArrayItem(prevItem => {
   return prevItem.filter((value,index) => {
     return index !== id;
   });
 })
}


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onAdd={addItem}
      />
      <div>
        <ul>
          {arrayItem.map((toAddItem, index )=>{
            return(<ToDoItem key={index} id={index} onChecked={deleteItem} item={toAddItem} />)
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
