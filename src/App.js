import './App.scss';
import MenuList from './component/MenuList'


function App() {
  return (
    <div className="todo">
      <div className="todoSidebar">
        <MenuList />
      </div>
      <div className="todoTasks"></div>
    </div>
  );
}


export default App;
