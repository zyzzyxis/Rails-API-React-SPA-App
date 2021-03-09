import { useState } from 'react';
import axios from 'axios' 

const TaskForm = (props) => {
    const {id, addTask, updateTask} = props
    const [title, setTitle] = useState(props.title)
    const [description, setDescription] = useState(props.description)
    const [duedate, setDuedate] = useState(props.duedate)

    const getFormName = () => {
        return id? 'Edit Form' : 'New Form'
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let task =  {title, description, duedate}
        console.log(task)
        if(id){
            let res = await axios.put(`/api/tasks/${id}`, task)
            updateTask(res.data)
        } else{
            let res = await axios.put(`/api/tasks`, task)
            addTask(res.data)
        }
    }
    return(
        <>
        <h1>{getFormName()}</h1>
        <form onSubmit={handleSubmit}>
            <p>Title</p>
            <input value={title} onChange={(e)=> setTitle(e.target.value) }/>
            <p>Description</p>
            <input value={description} onChange={(e)=> setDescription(e.target.value) }/>
            <p>Due Date</p>
            <input value={duedate} onChange={(e)=> setDuedate(e.target.value) }/>
            <br />
            <button type={'submit'}>{id ? 'update' : 'add' }</button>
        </form>
       </> 
    )
};


export default TaskForm