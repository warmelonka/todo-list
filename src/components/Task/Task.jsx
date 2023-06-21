import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { setTaskStatus, taskDelete } from '../../slice/tasksListSlice';
import { getDate } from '../../utils';
import Button from '../Button/Button';
import Input from '../FormElements/Input/Input';
import Textarea from '../FormElements/Textarea/Textarea';
import Checkbox from '../Checkbox/Checkbox';
import s from './Task.module.css';

function Task(props) {
  const { task, edit, setEdit } = props;
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
  const now = dayjs().format('YYYY-MM-DD');

  const dispatch = useDispatch();

  const updateValue = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleTaskDelete = () => {
    dispatch(taskDelete({
      id,
    }));
  };

  const handleStatusToggle = () => {
    dispatch(setTaskStatus({
      id,
      completed,
    }));
  };

  return (
    <div className={s.task}>
      { edit ? (
        <>
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
          <Textarea
            className={s.task__desc}
            name="description"
            placeholder="Описание задачи..."
            value={value.description}
            onChange={updateValue}
          />
        </>
      ) : (
        <>
          <span className={clsx(s.task__value, s.task__value_title)}>
            {value.title}
          </span>

          <span className={clsx(s.task__value, s.task__value_date)}>
            { getDate(value.date, now, completed) }
          </span>

          <span className={s.task__desc}>
            { description ? value.description : 'Нет описания' }
          </span>
        </>
      ) }
      <Checkbox
        className={s.task__checkbox}
        checked={completed}
        onChange={handleStatusToggle}
      />
      <Button
        className={clsx(s.task__button, s.task__button_edit)}
        type="button"
        value="save-task"
        onClick={() => setEdit(!edit)}
      >
        {edit ? 'Сохранить' : 'Изменить'}
      </Button>
      <Button
        className={clsx(s.task__button, s.task__button_delete)}
        type="button"
        value="delete-task"
        onClick={handleTaskDelete}
      >
        X
      </Button>
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
  edit: PropTypes.bool.isRequired,
  setEdit: PropTypes.func.isRequired,
};

export default Task;
