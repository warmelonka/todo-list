import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import TaskEdit from '../Task/TaskEdit';

function TasksList() {
  const tasksList = useSelector((state) => state.tasksList);
  const [editTask, setEditTask] = useState('');

  return (
    <>
      {tasksList.map((task) => (
        task.id === editTask ? (
          <TaskEdit
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
