import React, { useState } from 'react';
const TaskInput = ( {addTask}) =>{
    const [task, setTask] = useState('');

    //console.log(task);
    function handleInputvalue(event){
        setTask(event.target.value);
    }
    function handleAddTask(event){
        event.preventDefault();
        if (task.trim()=== '') return;
        addTask(task);
        setTask('');
    }

    return (
        <form className="inputField" onSubmit={handleAddTask}> 
         <input type="text" value={task} placeholder='Add Item' onChange={handleInputvalue} />
         <button>+</button>
      </form>
    );
};

export default TaskInput;