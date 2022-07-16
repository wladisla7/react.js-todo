import React from 'react';
import classNames from 'classnames';
import Badge from '../Badge/index'
import './list.scss';


const List = ({ items, isDeleted, onClick }) => {
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
                </li>

            ))}
        </ul >
    )
}

export default List;
