import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { taskAdd } from '../../slice/tasksListSlice';
import Input from '../FormElements/Input/Input';
import Textarea from '../FormElements/Textarea/Textarea';
import Button from '../Button/Button';
import s from './NewTask.module.css';

function NewTask() {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    title: '',
    date: '',
    description: '',
  });

  const updateValue = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setValue({
      title: '',
      date: '',
      description: '',
    });
  };

  const postTask = () => {
    dispatch(taskAdd({
      ...value,
    }));
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
          value={value.title}
          onChange={updateValue}
        />
        <Input
          className={s.newTask__date}
          type="date"
          name="date"
          value={value.date}
          onChange={updateValue}
        />
      </div>
      <div className={s.newTask__wrapBody}>
        <Textarea
          className={s.newTask__description}
          placeholder="Описание задачи..."
          name="description"
          value={value.description}
          onChange={updateValue}
        />
        <div className={s.newTask__wrapButton}>
          <Button
            className={s.newTask__add}
            disabled={!value.title}
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
