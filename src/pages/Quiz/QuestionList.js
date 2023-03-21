 
import Questions from './Questions';
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const TodosList = (props) => {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/units/${id}`)
      .then(response => {
        setTodos(response.data.quiz.questions);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);
   
  

  return (
    <div>
       
            <div> 
          {todos.map(todo => {
            return (
              <Questions key={todo._id} todo={todo} />
            )
          })}
          </div>
            
          </div>
         
    
  );
}

export default TodosList;