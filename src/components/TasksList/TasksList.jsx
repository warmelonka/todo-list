import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import Edit from '../Task/Edit/Edit';

function TasksList() {
  const tasksList = useSelector((state) => state.tasksList);
  const [editTask, setEditTask] = useState('');
  console.log('render list');
  return (
    <>
      {tasksList.map((task) => (
        task.id === editTask ? (
          <Edit
            task={task}
            key={task.id}
            onEditClick={setEditTask}
          />
        )
          : (
            <Task
              task={task}
              key={task.id}
              editTask={editTask}
              onEditClick={setEditTask}
            />
          )
      ))}
    </>
  );
}

export default TasksList;
