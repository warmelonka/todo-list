import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { fetchTodos } from '../../slice/tasksListSlice';
import api from '../../services/api';
import Input from '../FormElements/Input/Input';
import Textarea from '../FormElements/Textarea/Textarea';
import Button from '../Button/Button';
import s from './NewTask.module.css';

function NewTask() {
  const dispatch = useDispatch();
  const [task, setValue] = useState({
    id: nanoid(),
    title: '',
    date: '',
    description: '',
    completed: false,
  });

  const updateValue = (e) => {
    setValue({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setValue({
      id: nanoid(),
      title: '',
      date: '',
      description: '',
      completed: false,
    });
  };

  const postTask = async () => {
    await api.addTask(task);
    const todos = await api.fetchAllTodos();
    dispatch(fetchTodos(todos));
    clearForm();
  };

  return (
    <form className={s.newTask}>
      <div className={s.newTask__wrapHead}>
        <Input
          className={s.newTask__title}
          type="text"
          placeholder="Название задачи"
          name="title"
          value={task.title}
          onChange={updateValue}
        />
        <Input
          className={s.newTask__date}
          type="date"
          name="date"
          value={task.date}
          onChange={updateValue}
        />
      </div>
      <div className={s.newTask__wrapBody}>
        <Textarea
          className={s.newTask__description}
          placeholder="Описание задачи..."
          name="description"
          value={task.description}
          onChange={updateValue}
        />
        <div className={s.newTask__wrapButton}>
          <Button
            className={s.newTask__add}
            disabled={!task.title}
            value="add-task"
            onClick={postTask}
          >
            Добавить задачу
          </Button>
          <Button
            className={s.newTask__clear}
            value="reset-form"
            onClick={clearForm}
          >
            Сбросить
          </Button>
        </div>
      </div>
    </form>
  );
}

export default NewTask;
