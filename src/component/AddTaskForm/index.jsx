import React, { useState } from 'react'
import axios from 'axios';

import plus from '../../assets/img/plus.png'
import './AddTaskForm.scss'

const AddTaskForm = ({ listItem, onAddTask }) => {
    const [visibleForm, setVisibleFrom] = useState(false);
    const [inputValue, setinputValue] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const toggleFromVisible = () => {
        setVisibleFrom(!visibleForm)
        setinputValue('')
    }

    const addTask = () => {
        const obj = {
            listid: listItem.id,
            text: inputValue,
            complete: false
        };

        setIsLoading(true);
        axios.post('http://localhost:3001/tasks', obj)
            .then(({ data }) => {
                onAddTask(listItem.id, obj)
                toggleFromVisible();
            })
            .catch(() => {
                alert('Ошибка при добавилении')
            });
    }

    return (
        <div>
            <div className="taskForm">
                {!visibleForm ?
                    <div onClick={toggleFromVisible} className="taskFromNew">
                        <img src={plus} alt="add icon" />
                        <span className="newTask">Новая задача</span>
                    </div> : <div>
                        <input
                            className="field"
                            type="text"
                            placeholder="Текст задачи"
                            onChange={e => setinputValue(e.target.value)}
                        />
                        <div className="taskFromBlock">
                            <button  onClick={addTask} className="AddBtn">
                                {isLoading ? 'Добавление' : 'Добавить задачу'}
                            </button>
                            <button onClick={toggleFromVisible} className="AddBtn cancel">
                                Отмена
                            </button>
                        </div>
                    </div>}
            </div>
        </div>
    )
}


export default AddTaskForm
