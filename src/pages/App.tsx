import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import StopWatch from '../components/Stopwatch'
import { ITask } from "../types/tasks";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  function taskCompleted() {
    if (selected) {
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}></Form>
      <List
        tasks={tasks}
        selectTask={selectTask}
      ></List>
      <StopWatch
        selected={selected}
        taskCompleted={taskCompleted}
      />
    </div>
  );
}

export default App;
