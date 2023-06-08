import React from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom";

import Buttons from './Buttons';
import AddQuiz from './AddQuiz';
import QuestionList from './QuestionList';

function Quizpage(props) {
  const { id } = useParams();
    const [showAddTask, setShowAddTask] = useState(false);  
    return (
      <React.Fragment>
            <div style={{backgroundColor: "#ffffff"}}> 
      <div className='container' style={{backgroundColor:"ffffff"}}>
        <div className="container p-4"> 
              <div className="card" style={{ backgroundColor: "#70B9E6" }}>
              <div className="card-body">
                <h1 style={{ font: "25px" , color: "#ffffff" }}>NETS: UML Diagrams</h1>
              </div>
              </div>
              </div>
          <div className="container">
  
   
  <Buttons showForm={() => setShowAddTask(!showAddTask)}  changeTextAndColor={showAddTask} />
  
   
  {showAddTask && <AddQuiz  id={id} />}
  </div>
  <QuestionList id={id}/>
  <br></br>  
   
<br></br>
<br></br>
<br></br>
<br></br>
  </div>
  </div>
      
        </React.Fragment>
  )
}

export default Quizpage