import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import api from '../../services/api';
import { fetchTodos } from '../../slice/tasksListSlice';
import taskProp from '../../props/task.prop';
import Input from '../FormElements/Input/Input';
import Textarea from '../FormElements/Textarea/Textarea';
import Button from '../Button/Button';
import s from './Task.module.css';

function TaskEdit(props) {
  const { task, onEditClick } = props;
  const { id } = task;

  const [editTask, setEditValue] = useState(task);
  const dispatch = useDispatch();

  const updateValue = (e) => {
    setEditValue({
      ...editTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleTaskDelete = async () => {
    await api.removeTask(id);
    const todos = await api.fetchAllTodos();
    dispatch(fetchTodos(todos));
  };

  const handleSaveEdit = async () => {
    await api.editTask(editTask);
    const todos = await api.fetchAllTodos();
    dispatch(fetchTodos(todos));
    onEditClick('');
  };

  return (
    <div className={clsx(s.task, s.task_edit)}>
      <Input
        className={clsx(s.task__value, s.task__value_title, s.task__value_edit)}
        type="text"
        name="title"
        placeholder="Название задачи"
        value={editTask.title}
        onChange={updateValue}
      />
      <Input
        className={clsx(s.task__value, s.task__value_date)}
        type="date"
        name="date"
        value={editTask.date}
        onChange={updateValue}
      />
      <Textarea
        className={s.task__desc}
        name="description"
        placeholder="Описание задачи..."
        value={editTask.description}
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

TaskEdit.propTypes = {
  task: taskProp,
  onEditClick: PropTypes.func.isRequired,
};

export default TaskEdit;
