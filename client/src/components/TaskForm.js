import React, { useState } from 'react';
 

const TaskForm = (props) => {
    const {id} = props


    
    return(
        <form>
            <h1>{id ? 'Edit Form' : 'New Form'}</h1>
            <p>Title</p>
            <input />
            <p>Description</p>
            <input />
            <p>Due Date</p>
            <input />
        </form>
    )
};


export default TaskForm