import React from 'react';
import { useSelector } from 'react-redux';
import NewTask from '../NewTask/NewTask';
import './App.css';
import TasksList from '../TasksList/TasksList';

function App() {
  const tasksList = useSelector((state) => state.tasksList);

  return (
    <div className="app">
      <h1 className="app__title">Todo-list</h1>

      <div className="app__wrap">
        <NewTask />

        {
                    tasksList.length !== 0
                      ? <TasksList />
                      : <p className="app__no-task">Список задач пуст :(</p>
                }
      </div>
    </div>
  );
}

export default App;
