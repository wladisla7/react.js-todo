import React from 'react'
import axios from 'axios'
import AddTaskForm from '../AddTaskForm'

import checkpic from '../../assets/img/check.png'
import editpic from '../../assets/img/edit.png'


import './tasks.scss'

const Tasks = ({ listItem, onEditTitle, onAddTask }) => {

    const editTitle = () => {
        const newTitle = window.prompt('Название списка', listItem.name);
        if (newTitle) {
            onEditTitle(listItem.id, newTitle);
            axios.patch('http://localhost:3001/lists/' + listItem.id, {
                name: newTitle
            }).catch(() => {
                alert('Ошибка запроса')
            })
        }
    }

    return (
        <div className="todoTasks">
            <h2 className="task">
                {listItem.name}
                <img
                    onClick={editTitle}
                    src={editpic}
                    alt="edit pic" />
            </h2>

            <div className="taskItem">
                {!listItem.tasks.length && <h3>Задачи отсутствуют</h3>}
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
                <AddTaskForm listItem={listItem} onAddTask={onAddTask} />
            </div>
        </div>
    )

}

export default Tasks
