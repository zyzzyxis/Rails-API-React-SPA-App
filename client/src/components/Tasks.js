import React from 'react'
import Task from './Task'


const Tasks = (props) => {
  const {tasks} = props
  const renderTasks = () => {
    return tasks.map( task => { return <Task key={task.id}{...task}/>})
    
  }
  return (
    <>
      <h1>Tasks Here</h1>
      {renderTasks()}
    </>
  )
}


export default Tasks