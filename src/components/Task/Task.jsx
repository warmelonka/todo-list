import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { setTaskStatus, taskDelete } from '../../slice/tasksListSlice';
import taskProp from '../../props/task.prop';
import { getDate } from '../../utils';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import s from './Task.module.css';

function Task(props) {
  const { task, editTask, onEditClick } = props;
  const {
    id,
    title,
    date,
    description,
    completed,
  } = task;
  const dispatch = useDispatch();
  const now = dayjs().format('YYYY-MM-DD');

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

  const handleSetEdit = (idTaskEdit) => {
    onEditClick(idTaskEdit);
  };

  return (
    <div className={clsx(s.task, editTask === id && s.task_edit)}>
      <span className={clsx(s.task__value, s.task__value_title)}>
        {title}
      </span>

      <span className={clsx(s.task__value, s.task__value_date)}>
        {getDate(date, now, completed)}
      </span>

      <span className={s.task__desc}>
        {description || 'Нет описания'}
      </span>
      <Button
        className={clsx(s.task__button, s.task__button_edit)}
        type="button"
        value="save-task"
        onClick={() => handleSetEdit(id)}
      >
        Изменить
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

Task.propTypes = {
  task: taskProp,
  editTask: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired,
};

export default React.memo(Task);
