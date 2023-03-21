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
  const task = useSelector((state) => state.taskForm);
  const { title, date, description } = task;

  const postTask = () => {
    dispatch(taskAdd({
      title,
      date,
      description,
    }));
    dispatch(clearForm());
  };

  const updateValueForm = (e) => {
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
          onChange={updateValueForm}
        />
        <Input
          className="new-task__date"
          type="date"
          name="date"
          value={date}
          onChange={updateValueForm}
        />
      </div>
      <div className="new-task__wrap-body">
        <Textarea
          className="new-task__description"
          placeholder="Описание задачи..."
          name="description"
          value={description}
          onChange={updateValueForm}
        />
        <div className="new-task__wrap-button">
          <Button
            className="new-task__add"
            state={!title}
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
