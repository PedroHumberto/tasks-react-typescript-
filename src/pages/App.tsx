import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import StopWatch from '../components/Stopwatch'


function App() {
  return (
    <div className={style.AppStyle}>
      <Form></Form>
      <List></List>
      <StopWatch/>
    </div>
  );
}

export default App;
