import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewTask from '../NewTask/NewTask';
import TasksList from '../TaskList/TasksList';
import api from '../../services/api';
import { fetchTodos } from '../../slice/tasksListSlice';
import s from './App.module.css';

function App() {
  const tasksList = useSelector((state) => state.tasksList);
  const dispatch = useDispatch();

  useEffect(() => {
    const downloadTodos = async () => {
      const res = await api.fetchAllTodos();
      dispatch(fetchTodos(res));
    };
    downloadTodos();
  }, []);

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
