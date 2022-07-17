import React, { useState } from 'react';
import List from './component/List';
import AddListButton from './component/AddList/AddButtonList.jsx';
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
          isDeleted />
        <AddListButton colors={DB.colors} />
      </div>
      <div className="todoTasks"></div>
    </div>
  );
}


export default App;

