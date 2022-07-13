import React from 'react';
import listPic from '../assets/img/list.png'


const MenuList = () => {
    return (
        <ul className="todoList" >
            <li>
                <div className="listpic">
                    <img src={listPic} alt="listpicture"></img>
                </div>
                <span>Все задачи</span>
            </li>
        </ul >
    )
}

export default MenuList;
