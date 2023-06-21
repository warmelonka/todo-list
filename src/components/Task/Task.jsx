import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { setTaskStatus, taskDelete } from '../../slice/tasksListSlice';
import Button from '../Button/Button';
import Input from '../FormElements/Input/Input';
import Textarea from '../FormElements/Textarea/Textarea';
import Checkbox from '../Checkbox/Checkbox';
import s from './Task.module.css';

function Task(props) {
  const { task } = props;
  const {
    id,
    title,
    date,
    description,
    completed,
  } = task;
  const [value, setValue] = useState({
    id,
    title,
    date,
    description,
    completed,
  });

  const dispatch = useDispatch();

  const updateValue = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handlerTaskDelete = () => {
    dispatch(taskDelete({
      id,
    }));
  };

  const handlerToggle = () => {
    dispatch(setTaskStatus({
      id,
      completed,
    }));
  };

  return (
    <div className={s.task}>
      <div className={s.task__head}>
        <Checkbox
          checked={completed}
          onChange={handlerToggle}
        />
        <Input
          className={clsx(s.task__value, s.task__value_title)}
          type="title"
          name="title"
          placeholder="Название задачи"
          value={value.title}
          onChange={updateValue}
        />
        <Input
          className={clsx(s.task__value, s.task__value_date)}
          type="date"
          name="date"
          value={value.date}
          onChange={updateValue}
        />
        <Button
          className={clsx(s.task__button, s.task__button_edit)}
          type="button"
          value="save-task"
          disabled
          onClick={() => console.log('save')}
        >
          Сохранить
        </Button>
        <Button
          className={clsx(s.task__button, s.task__button_delete)}
          type="button"
          value="delete-task"
          onClick={handlerTaskDelete}
        >
          X
        </Button>
      </div>
      <Textarea
        className={s.task__desc}
        name="description"
        placeholder="Описание задачи..."
        value={value.description}
        onChange={updateValue}
      />
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    },
  ).isRequired,
};

export default Task;
