import React, { useState } from 'react';
import plusPic from '../../assets/img/plus.png'
import List from '../List/index'
import Badge from '../Badge'
import './AddList.scss';

import close from '../../assets/img/exit.png'


const AddListButton = ({ colors }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [seletedColor, selectColor] = useState(colors[0].id)

    console.log(seletedColor)

    return (
        <div className="AddList">
            <List
                onClick={() => setVisiblePopup(true)} //отображение списка
                items={[
                    {
                        icon: <img src={plusPic} alt='plus' />,
                        name: 'Добавить список',
                    },
                ]}
            />
            {visiblePopup && (
                <div className="AddListPop">
                    <img
                        onClick={() => setVisiblePopup(false)}
                        src={close}
                        alt="closePic"
                        className="CloseBtn"
                    />
                    <input type="text" placeholder="Название списка" className="field" />
                    <div className="AddListPopColor">
                        <div className="BadgePop">
                            {colors.map(color => (
                                <Badge
                                    onClick={() => selectColor(color.id)}
                                    key={color.id}
                                    color={color.name}
                                    className={seletedColor === color.id && 'activecolor'}
                                />
                            ))
                            }
                        </div>
                    </div>
                    <button className="AddBtn">Добавить</button>
                </div>
            )}
        </div >

    );
};

export default AddListButton