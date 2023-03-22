import Articles from './Articles';
 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
 

const ArticleList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/arts/')
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
              <Articles key={todo._id} todo={todo} />
            )
          })}
          </div>
           
          </div>
         
    
  );
}

export default ArticleList;