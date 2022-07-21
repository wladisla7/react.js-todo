import React from 'react'
import deletepic from '../../assets/img/delete.png'
import editpic from '../../assets/img/edit.png'
import checkpic from '../../assets/img/check.png'

const Task = ({ id, text, onRemove, onEdit, listItem }) => {
    return (
        <div key={id} className="tasksItemRow">
            <div className="checkbox">
                <input id={`task-${id}`} type="checkbox" />
                <label htmlFor={`task-${id}`}>
                    <img src={checkpic} alt="checkpic" className="checkpic" />
                </label>
            </div>
            <span className="taskText">{text}</span>
            <div className="taskIcon">
                <div onClick={() => onEdit(listItem.id, { id, text })}>
                    <img src={editpic} alt="editpic" className="editpic" />
                </div>
                <div onClick={() => onRemove(listItem.id, id)}>
                    <img src={deletepic} alt="deletepic" className="deletepic" />
                </div>
            </div>
        </div>
    )
}

export default Task
