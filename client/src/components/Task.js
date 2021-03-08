const Task = (props) => {
    const {title, description, duedate, id} = props
    return (
        <div>
            <h2>Title : {title}</h2>
            <h3> Description: {description}</h3>
            <h3>DueDate: {duedate}</h3>
        </div>
    )
}


export default Task