import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from '../Task/Task';

function TasksList() {
  const tasksList = useSelector((state) => state.tasksList);
  const [editTask, setEditTask] = useState('');

  return (
    <>
      {tasksList.map((task) => (
        <Task
          task={task}
          key={task.id}
          editTask={editTask}
          setEditTask={setEditTask}
        />
      ))}
    </>
  );
}

export default TasksList;
