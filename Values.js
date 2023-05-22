import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import './Values.css';

function Values() {
    const [task,settask]=useState('');
    const [tasks,settasks]=useState([])
    const [completed,setCompleted]=useState([])
    const [edit,setedit]=useState(false)
    function handleChange(e){
        settask(e.target.value)

    }
    function handleSubmit(e){
        e.preventDefault()
        if(edit!==false){
          tasks[edit]=task;
          setedit(false)
        }else
        settasks([...tasks,task])
        settask("");
    }
    function handleDelete(e,index){
      e.preventDefault();
      settasks(tasks.filter((task,id)=>{
        return id !== index;
      }))
    }
    function handleEdit(e,index){
      e.preventDefault();
      settask(tasks[index]);
      setedit(index);
    }
    function handleCompleted(e,index){
      e.preventDefault();
      setCompleted([...completed,index]);
    }
  return (
    <div id='wrapper'>
    <form onSubmit={handleSubmit}>
    <input type='text' placeholder='enter your name' value={task} onChange={handleChange}></input>
    <button>task</button>
    <ul>
        {tasks.map((task,index)=>{
          return(
            <li className={completed.includes(index)?"completed":""} key={index}>{task}
            <a href='' onClick={(e)=>handleDelete(e,index)}><DeleteIcon/></a>
            <a href='' onClick={(e)=>handleEdit(e,index)}><EditIcon/></a>
            <a href='' onClick={(e)=>handleCompleted(e,index)}><CheckIcon/></a>
            </li>
          )
        }
        )}
    </ul>
    </form>
    </div>
    
  )
}

export default Values