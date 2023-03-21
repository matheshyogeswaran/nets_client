import Tasks from './Tasks';
 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const TodosList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/units/')
      .then(response => {
        setTodos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

   
   

  return (
    <div>
       
            <div> 
          {todos.map(todo => {
            return (
              <Tasks key={todo._id} todo={todo} />
            )
          })}
          </div>
            
          </div>
         
    
  );
}

export default TodosList;
