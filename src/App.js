import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, AddList, Tasks } from './component';
import './App.scss';
import listPic from './assets/img/list.png'



function App() {
  const [lists, setLists] = useState(null);
  const [colors, setColor] = useState(null);
  const [activeItem, setActiveItem] = useState(null);



  useEffect(() => {

    axios.get('http://localhost:3001/lists?_expand=color&_embed=tasks').then(({ data }) => {
      setLists(data);
    });

    axios.get('http://localhost:3001/colors').then(({ data }) => {
      setColor(data);
    });
  }, []);

  const onAddList = (obj) => {
    const newList = [
      ...lists,
      obj
    ];
    setLists(newList);
  };

  const onAddTask = (listid, taskObj) => {
    const newList = lists.map(item => {
      if (item.id === listid) {
        item.tasks = [...item.tasks, taskObj];
      }
      return item;
    })
    setLists(newList);
  }

  const onEditListTitle = (id, title) => {
    const newList = lists.map(item => {
      if (item.id === id) {
        item.name = title;
      }
      return item;
    })
    setLists(newList);
  }

  return (
    <div className="todo">
      <div className="todoSidebar">
        <List
          items={[
            {
              icon: <img src={listPic} alt='list' />,
              name: 'Все задачи',
              // active: true
            }
          ]}

        />
        {lists ? (
          <List
            items={lists}
            onRemove={id => {
              const newLists = lists.filter(item => item.id !== id)
              setLists(newLists);
            }}
            onClickItem={item => {
              setActiveItem(item);
            }}
            activeItem={activeItem}
            isDeleted
          />
        ) : (
          'Загрузка'
        )}
        <AddList onAdd={onAddList} colors={colors} />
      </div>
      {lists && activeItem &&
        <Tasks
          listItem={activeItem}
          onAddTask={onAddTask}
          onEditTitle={onEditListTitle} />}
    </div>
  );
}


export default App;

