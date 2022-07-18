
import React from 'react'
import checkpic from '../../assets/img/check.png'
import './tasks.scss'

const Tasks = () => {
    return (
        <div className="todoTasks">
            <h2 className="task">
                Фронтенд
            </h2>

            <div className="taskItem">
                <div className="tasksItemRow">
                    <div className="checkbox">
                        <input id="check" type="checkbox" />
                        <label htmlFor="check">
                            <img src={checkpic} alt="checkpic" className="checkpic" />
                        </label>
                        <p>ReactJS Hooks</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Tasks
