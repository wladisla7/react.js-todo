import React, { useState, useEffect } from 'react';
import axios from 'axios';

import plusPic from '../../assets/img/plus.png'
import List from '../List/index'
import Badge from '../Badge'
import './AddList.scss';

import close from '../../assets/img/exit.png'


const AddList = ({ colors, onAdd }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [seletedColor, selectColor] = useState(3);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (Array.isArray(colors)) {
            selectColor(colors[0].id);
        }
    }, [colors]);


    const onClose = () => {
        setInputValue('');
        setVisiblePopup(false);
        selectColor(colors[0].id);
    }

    const addItem = () => {
        if (!inputValue) {
            alert('Введите название списка');
            return;
        }

        setIsLoading(true);

        axios
            .post('http://localhost:3001/lists', {
                name: inputValue,
                colorId: seletedColor
            })
            .then(({ data }) => {
                const color = colors.filter(c => c.id === seletedColor)[0].name;
                const listobj = { ...data, color: { name: color } };
                onAdd(listobj);
                onClose();
            }).finally(() => {
                setIsLoading(false);
            })
    }


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
                        onClick={onClose}
                        src={close}
                        alt="closePic"
                        className="CloseBtn"
                    />
                    <input type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        placeholder="Название списка"
                        className="field" />


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
                    <button onClick={addItem} className="AddBtn">
                        {isLoading ? 'Добавление' : 'Добавить'}
                    </button>
                </div>
            )}
        </div >

    );
};

export default AddList