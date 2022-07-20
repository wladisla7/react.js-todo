import React from 'react';
import axios from 'axios'
import classNames from 'classnames';

import Badge from '../Badge/index';
import './list.scss';
import deletePic from '../../assets/img/delete.png'



const List = ({ items, isDeleted, onClick, onRemove }) => {
    const deleteList = (item) => {
        if (window.confirm('Вы действительно хотите удалить?')) {
            axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
                onRemove(item.id);
            });
        }
    }

    return (
        <ul onClick={onClick} className="todoList" >
            {items.map((item, index) => (
                <li key={index} className={classNames(item.className, { 'active': item.active })}>
                    <div className="listpic">
                        {item.icon ? (
                            item.icon
                        ) : (
                            <Badge color={item.color.name} />
                        )}
                    </div>
                    <span>{item.name}</span>
                    {isDeleted && (
                        <img
                            src={deletePic}
                            alt="Delete pic"
                            className="deletePic"
                            onClick={() => deleteList(item)}
                        />
                    )}
                </li>

            ))}
        </ul >
    )
}

export default List;
