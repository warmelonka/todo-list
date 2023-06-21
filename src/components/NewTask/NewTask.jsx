import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskAdd } from '../../slice/tasksListSlice';
import Input from '../FormElements/Input/Input';
import Textarea from '../FormElements/Textarea/Textarea';
import { clearForm, updateValue } from '../../slice/taskNewSlice';
import Button from '../Button/Button';
import s from './NewTask.module.css';

function NewTask() {
  const dispatch = useDispatch();
  const taskNew = useSelector((state) => state.taskNewForm);
  const { title, date, description } = taskNew;

  const postTask = () => {
    dispatch(taskAdd({
      title,
      date,
      description,
    }));
    dispatch(clearForm());
  };

  const handlerUpdateValue = (e) => {
    dispatch(updateValue({
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className={s.newTask}>
      <div className={s.newTask__wrapHead}>
        <Input
          className={s.newTask__title}
          type="text"
          placeholder="Название задачи"
          name="title"
          value={title}
          onChange={handlerUpdateValue}
        />
        <Input
          className={s.newTask__date}
          type="date"
          name="date"
          value={date}
          onChange={handlerUpdateValue}
        />
      </div>
      <div className={s.newTask__wrapBody}>
        <Textarea
          className={s.newTask__description}
          placeholder="Описание задачи..."
          name="description"
          value={description}
          onChange={handlerUpdateValue}
        />
        <div className={s.newTask__wrapButton}>
          <Button
            className={s.newTask__add}
            disabled={!title}
            value="add-task"
            onClick={postTask}
          >
            Добавить задачу
          </Button>
          <Button
            className={s.newTask__clear}
            value="reset-form"
            onClick={() => dispatch(clearForm())}
          >
            Сбросить
          </Button>
        </div>
      </div>
    </form>
  );
}

export default NewTask;
