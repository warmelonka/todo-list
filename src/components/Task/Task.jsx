import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import './Task.css';
import { setTaskStatus, taskDelete, updateTaskList } from '../../slice/tasksListSlice';
import Button from '../Button/Button';
import Input from '../FormElements/Input/Input';
import Textarea from '../FormElements/Textarea/Textarea';
import Checkbox from '../Checkbox/Checkbox';

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
  const currentDate = dayjs().format('YYYY-MM-DD');
  const dispatch = useDispatch();

  const updateValue = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handlerUpdateTaskList = () => {
    dispatch(updateTaskList(value));
    setEdit(false);
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

  const getDate = (dateTask) => {
    if (completed) return 'Выполнено';

    if (dateTask) {
      if (dateTask < currentDate) {
        return 'Просрочено!';
      } return `до ${dateTask}`;
    }
    return 'Бессрочно';
  };

  return (
    <div className={edit !== id ? 'task' : 'task task--edit'}>
      {
                edit === id ? (
                  <>
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
                        onClick={handlerUpdateTaskList}
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
                  </>
                )
                  : (
                    <>
                      <div className="task__head">
                        <Checkbox
                          checked={completed}
                          onChange={handlerToggle}
                        />
                        <div className="task__value task__value--title">{title}</div>
                        <div className="task__value task__value--date">
                          {getDate(date)}
                        </div>
                        <Button
                          className="task__button task__button--edit"
                          type="button"
                          value="edit-task"
                          onClick={() => setEdit(id)}
                        >
                          Изменить
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
                      {description.length ? <p className="task__desc">{description}</p> : ''}
                    </>
                  )
            }
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
