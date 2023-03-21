import KTs from './KTs';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const UnitList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/kts/')
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
              <KTs key={todo._id} todo={todo} />
            )
          })}
          </div>
           
          </div>
         
    
  );
}

export default UnitList;

