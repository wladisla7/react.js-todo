import React from 'react'
import checkpic from '../../assets/img/check.png'
import './tasks.scss'

const Tasks = ({ listItem }) => {
    return (
        <div className="todoTasks">
            <h2 className="task">
                {listItem.name}
            </h2>

            <div className="taskItem">
                {listItem.tasks.map(task =>
                    <div key={task.id} className="tasksItemRow">
                        <div className="checkbox">
                            <input id={`task-${task.id}`} type="checkbox" />
                            <label htmlFor={`task-${task.id}`}>
                                <img src={checkpic} alt="checkpic" className="checkpic" />
                            </label>
                        </div>
                        <span className="taskText">{task.text}</span>
                    </div>
                )}
            </div>
        </div>
    )

}

export default Tasks
