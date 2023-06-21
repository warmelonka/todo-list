import React from 'react';
import { useSelector } from 'react-redux';
import NewTask from '../NewTask/NewTask';
import TasksList from '../TasksList/TasksList';
import s from './App.module.css';

function App() {
  const tasksList = useSelector((state) => state.tasksList);

  return (
    <div className={s.app}>
      <h1 className={s.app__title}>Todo-list</h1>

      <div className={s.app__wrap}>
        <NewTask />
        {
          tasksList.length !== 0
            ? <TasksList />
            : <p className={s.app__noTask}>Список задач пуст :(</p>
        }
      </div>
    </div>
  );
}

export default App;
