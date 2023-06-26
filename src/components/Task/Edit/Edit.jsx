import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { saveTask, setTaskStatus, taskDelete } from '../../../slice/tasksListSlice';
import Input from '../../FormElements/Input/Input';
import Textarea from '../../FormElements/Textarea/Textarea';
import Button from '../../Button/Button';
import Checkbox from '../../Checkbox/Checkbox';
import s from '../Task.module.css';

function Edit(props) {
  const { task, onEditClick } = props;
  const {
    id,
    title,
    date,
    description,
    completed,
  } = task;
  const [editValue, setEditValue] = useState({
    title,
    date,
    description,
  });
  const dispatch = useDispatch();
  console.log('render edit');
  const updateValue = (e) => {
    setEditValue({
      ...editValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleStatusToggle = () => {
    dispatch(setTaskStatus({
      id,
      completed,
    }));
  };

  const handleTaskDelete = () => {
    dispatch(taskDelete({
      id,
    }));
  };

  const handleSaveEdit = () => {
    dispatch(saveTask({
      id,
      ...editValue,
    }));
    onEditClick('');
  };

  return (
    <div className={clsx(s.task, s.task_edit)}>
      <Input
        className={clsx(s.task__value, s.task__value_title)}
        type="text"
        name="title"
        placeholder="Название задачи"
        value={editValue.title}
        onChange={updateValue}
      />
      <Input
        className={clsx(s.task__value, s.task__value_date)}
        type="date"
        name="date"
        value={editValue.date}
        onChange={updateValue}
      />
      <Textarea
        className={s.task__desc}
        name="description"
        placeholder="Описание задачи..."
        value={editValue.description}
        onChange={updateValue}
      />
      <Button
        className={clsx(s.task__button, s.task__button_edit)}
        type="button"
        value="save-task"
        onClick={handleSaveEdit}
      >
        Сохранить
      </Button>
      <Checkbox
        className={s.task__checkbox}
        checked={completed}
        onChange={handleStatusToggle}
      />
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

Edit.propTypes = {
  task: PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    },
  ).isRequired,
  onEditClick: PropTypes.func.isRequired,
};

export default Edit;
