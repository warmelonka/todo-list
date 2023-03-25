import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import './Task.css';
import { setTaskStatus, taskDelete } from '../../slice/tasksListSlice';
import Button from '../Button/Button';
import Input from '../FormElements/Input/Input';
import Textarea from '../FormElements/Textarea/Textarea';
import Checkbox from '../Checkbox/Checkbox';

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
  // const currentDate = dayjs().format('YYYY-MM-DD');
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
    <div className="task">
      <div className="task__head">
        <Checkbox
          checked={completed}
          onChange={handlerToggle}
        />
        <Input
          className="task__value task__value--title"
          type="title"
          name="title"
          placeholder="Название задачи"
          value={value.title}
          onChange={updateValue}
        />
        <Input
          className="task__value task__value--date"
          type="date"
          name="date"
          value={value.date}
          onChange={updateValue}
        />
        <Button
          className="task__button task__button--edit"
          type="button"
          value="save-task"
          disabled
          onClick={() => console.log('save')}
        >
          Сохранить
        </Button>
        <Button
          className="task__button task__button--delete"
          type="button"
          value="delete-task"
          onClick={handlerTaskDelete}
        >
          X
        </Button>
      </div>
      <Textarea
        className="task__desc"
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
