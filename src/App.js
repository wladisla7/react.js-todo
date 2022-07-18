import React, { useState } from 'react';
import List from './component/List';
import AddListButton from './component/AddList/AddButtonList.jsx';
import Tasks from './component/Tasks';
import DB from './assets/db.json';
import listPic from './assets/img/list.png';
import './App.scss';





function App() {
  const [lists, setLists] = useState(
    DB.lists.map(item => {
      item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
      return item;
    })
  );

  const onAddList = (obj) => {
    const newList = [
      ...lists,
      obj
    ];
    setLists(newList);
  };

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
        <List
          items={lists}
          onRemove={(lists) => {
            alert(1)
            console.log(lists)
          }
          }
          isDeleted
        />
        <AddListButton onAdd={onAddList} colors={DB.colors} />
      </div>
      <Tasks />
    </div>
  );
}


export default App;

