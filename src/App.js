import './App.scss';
import List from './component/List'
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
              active: true
            }
          ]}
        />
        <List
          items={[
            {
              color: 'green',
              name: 'Покупки',
              
            },
            {
              color: 'red',
              name: 'Фронтенд'
            },
            {
              color: 'yellow',
              name: 'Фильмы и сериалы'
            }
          ]} />
      </div>
      <div className="todoTasks"></div>
    </div>
  );
}


export default App;
