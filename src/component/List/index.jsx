import React from 'react';
import classNames from 'classnames';
import Badge from '../Badge/index';
import './list.scss';
import deletePic from '../../assets/img/delete.png'
import './list.scss';


const List = ({ items, isDeleted, onClick, onRemove }) => {

    const deleteList = (item) => {
        if (window.confirm('Вы действительно хотите удалить?')){
            onRemove(item);
        }
    }

    return (
        <ul onClick={onClick} className="todoList" >
            {items.map((item, id) => (
                <li key={id} className={classNames(item.className, { 'active': item.active })}>
                    <div className="listpic">
                        {item.icon ? (
                            item.icon
                        ) : (
                            <Badge color={item.color} />
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
