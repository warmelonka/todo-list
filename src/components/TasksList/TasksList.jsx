import React from 'react';
import { useSelector } from 'react-redux';
import Task from '../Task/Task';

function TasksList() {
  const tasksList = useSelector((state) => state.tasksList);

  // useEffect(() => {
  //   window.localStorage.setItem('tasksList', JSON.stringify(tasksList));
  // }, [tasksList]);

  return (
    <>
      {tasksList.map((task) => (
        <Task
          task={task}
          key={task.id}
        />
      ))}
    </>
  );
}

export default TasksList;
