import React, { useState } from 'react';
import './App.css';

const App = props =>
{
const [value,setValue] = useState('');
const [todo , setTodos]= useState([]) ;


const forsubmited = (event) =>{
  event.preventDefault(); //desactivé refrechir de page
  if(value.trim()===""){
    return alert("You must write something!") }
    else {
      setValue(value.trim())
    }


    


  setTodos([
    ...todo,
    {
      id : todo.lenght + 1,
      content : value ,
      readOnly : false ,

    }
  ]);
  setValue('');
} ;



const removetodo =(othertodo)=>
{
  
const newtodo = [...todo]
newtodo.splice(othertodo , 1 )
  setTodos(newtodo);
  
} 

const editTodo = ( editTodos , newtext  ) =>setTodos(
      todo.map((todos , i) => ( i  === editTodos ? { ...todos,  content:newtext } : todos))
    );
   






 // toggle Edited
 const onFocus = (id) =>
 setTodos(
   todo.map((todos , i) =>
     i === id
       ? { ...todos, isEdited: true }
       : { ...todos, isEdited: false }
   )
 );
// finish the edit mode
const onBlur = () =>
 setTodos(todo.map((todos) => ({ ...todos, isEdited: false })));







return (
  <div>
    <form className="add-todo-form">
    <div className="input-container">
    <button className="my-btn btn-primary" onClick={(e)=>{forsubmited(e) }}>Add</button>
    <input  type="text" value={value} onChange={(event)=> setValue(event.target.value)} />
    <ul>
      {todo.map((todo , index) =>(
        <li  key={index} className="todo-card" >
        <input
        style={
          index.isEdited ? { boxShadow: "5px 3px 13px 5px #00000054" } : {}
        }
        onFocus={() => onFocus(index)}
        onBlur={() => onBlur()}
        
        className={index.isComplet ? "todo-text text-complete" : "todo-text"}
        type="text" value={todo.content} onChange={(event) => editTodo(index , event.target.value )
         } />
        
        <button  className="my-btn btn-danger" onClick={()=>removetodo(index)}>remove</button>
        </li>
        
      ))}
       
     
      
    </ul>
    </div>
    </form>

  </div> )
}

export default App;
