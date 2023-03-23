import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Task from '../Task/Task';

function TasksList() {
  const tasksList = useSelector((state) => state.tasksList);
  const [edit, setEdit] = useState(false);

  // useEffect(() => {
  //   window.localStorage.setItem('tasksList', JSON.stringify(tasksList));
  // }, [tasksList]);

  return (
    <>
      {tasksList.map((task) => (
        <Task
          task={task}
          edit={edit}
          setEdit={setEdit}
          key={task.id}
        />
      ))}
    </>
  );
}

export default TasksList;
