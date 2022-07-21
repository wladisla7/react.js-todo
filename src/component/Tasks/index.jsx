import React from 'react'
import axios from 'axios'
import AddTaskForm from '../AddTaskForm'
import Task from '../Task'
import editpic from '../../assets/img/edit.png'


import './tasks.scss'

const Tasks = ({ listItem, onEditTitle, onAddTask, onRemoveTask, onCompleteTask, onEditTask }) => {

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
                {listItem.tasks &&
                    listItem.tasks.map(task => (
                        <Task key={task.id} listItem={listItem} onEdit={onEditTask}  onRemove={onRemoveTask} onComplited={onCompleteTask} {...task} />
                    ))}
                <AddTaskForm key={listItem.id} listItem={listItem} onAddTask={onAddTask} />
            </div>
        </div>
    )

}

export default Tasks
