import React, { useState } from 'react';
import axios from 'axios';
import { FaPencilAlt } from 'react-icons/fa';
import swal from "sweetalert";

const Edit = ({ todo }) => {
     
    const [modal, setModal] = useState(null);
   
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const onChange = (e) => {
    setUpdatedTodo({
      ...updatedTodo,
      [e.target.name]: e.target.value
    });
  };

  const onUpdate = (e) => {
    e.preventDefault();
    console.log(todo._id);
    axios.post(`http://localhost:4000/units/q/update/${todo._id}`, updatedTodo)
      .then(() => {
        setModal(null);
        swal({
          icon: "success",
          text: "Successfully updated",
        });
      })
      .catch((err) => {
        console.log(err);
        swal({
          icon: "warning",
          text: "Error",
        });
      });
  };  

     
    
        return (
            <div> 
                <p>
                <FaPencilAlt
                  className='editIcon'
                  type='button'
                  class='rounded float-end'
                  style={{ color: 'blue' }}
                  data-bs-toggle='modal'
                  data-bs-target={`#edit-modal-${todo._id}`}
                />
              </p>
              <div className="modal fade" id={`edit-modal-${todo._id}`} tabIndex="-1" aria-labelledby="edit-modal-label" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Content</h1>
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body"> 
              
                <form onSubmit={onUpdate}>
                     
                <div className="form-control">
                 
                        <label htmlFor="question">Write the question.</label>
                        <input  type="text"
                                className="form-control"
                                id="question" name="question"
                                value={updatedTodo.question}
                                required
                                onChange={onChange}
                                />
                        <br></br>
                         

<label for="basic-url" class="form-label" htmlFor="op1">Option 01</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0" 
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  id="op1" name="op1"
  value={updatedTodo.op1}
  onChange={onChange}
  aria-label="Text input with radio button"/>
</div>

<br></br>
<label for="basic-url" class="form-label" htmlFor="op2">Option 02</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0" 
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  id="op2" name="op2"
  value={updatedTodo.op2}
  onChange={onChange}
  aria-label="Text input with radio button"/>
</div>

<br></br>
<label for="basic-url" class="form-label" htmlFor="op3">Option 03</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0" 
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  id="op3" name="op3"
  value={updatedTodo.op3}
  onChange={onChange}
  aria-label="Text input with radio button"/>
</div>
                         
                        <br></br>
                        <label for="basic-url" class="form-label" htmlFor="op4">Option 04</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0" 
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  id="op4" name="op4"
  value={updatedTodo.op4}
  onChange={onChange}
  aria-label="Text input with radio button"/>
</div>
                        <br></br>
                         
                        <input type="submit" value="Update Question" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            </div>
            </div>
            </div>
            </div>


        )
    }

export default Edit;
 

 

   