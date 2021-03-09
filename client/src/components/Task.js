const Task = (props) => {
    const {title, description, duedate, id, editTaskClickHandler} = props
    return (
        <div>
            <h2>Title : {title}</h2>
            <h3> Description: {description}</h3>
            <h3>DueDate: {duedate}</h3>
            <p onClick={() =>editTaskClickHandler(id)}>Edit</p>
            <hr />
        </div>
    )
}


export default Task