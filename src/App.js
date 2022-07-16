import './App.scss';
import List from './component/List'
import AddListButton from './component/AddList/AddButtonList.jsx'
import DB from './assets/db.json'
import listPic from './assets/img/list.png'
 




function App() {
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
          isDeleted
        />
        <List
          items={[
            {
              color: 'green',
              name: 'Покупки',
              active: true

            },
            {
              color: 'red',
              name: 'Фронтенд',

            },
            {
              color: 'yellow',
              name: 'Фильмы и сериалы'
            }
          ]}
          isDeleted
        />
        <AddListButton colors={DB.colors}/>
      </div>
      <div className="todoTasks"></div>
    </div>
  );
}


export default App;
