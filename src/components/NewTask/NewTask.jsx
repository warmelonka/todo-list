import React from 'react';
import './NewTask.css';
import { useDispatch, useSelector } from 'react-redux';
import { taskAdd } from '../../slice/tasksListSlice';
import Input from '../FormElements/Input/Input';
import Textarea from '../FormElements/Textarea/Textarea';
import { clearForm, updateValue } from '../../slice/taskNewSlice';
import Button from '../Button/Button';

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
    <form className="new-task">
      <div className="new-task__wrap-head">
        <Input
          className="new-task__title"
          type="text"
          placeholder="Название задачи"
          name="title"
          value={title}
          onChange={handlerUpdateValue}
        />
        <Input
          className="new-task__date"
          type="date"
          name="date"
          value={date}
          onChange={handlerUpdateValue}
        />
      </div>
      <div className="new-task__wrap-body">
        <Textarea
          className="new-task__description"
          placeholder="Описание задачи..."
          name="description"
          value={description}
          onChange={handlerUpdateValue}
        />
        <div className="new-task__wrap-button">
          <Button
            className="new-task__add"
            disabled={!title}
            value="add-task"
            onClick={postTask}
          >
            Добавить задачу
          </Button>
          <Button
            className="new-task__clear"
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
