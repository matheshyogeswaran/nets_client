import React from 'react'
import { useState } from 'react';

import AddUnit from './AddUnit';
import TodosList from './Task';
import Header from '../../components/Header';

function Chapter(props) {
  const [showAddTask, setShowAddTask] = useState(false);

  //ragu
  const [toDoRefresh, setToDoRefresh] = useState(1);
  const assignToDoRefresh = (data) => {
    setToDoRefresh(data)
  }
  //end
  return (
    <div>
      <div className="container">
        <h4 style={{ font: "25px", color: "#000000" }}>Units</h4>

        <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />

        {showAddTask && <AddUnit chapterID={props.chapterID} sendData={assignToDoRefresh} toDoRefresh={toDoRefresh} />}
        <br></br>
        <TodosList chapterID={props.chapterID} chapterName={props.chapterName} toDoRefresh={toDoRefresh}></TodosList>
      </div>

    </div>

  )
}

export default Chapter
