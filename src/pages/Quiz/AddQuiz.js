import axios from 'axios';
import React, { useState } from 'react';
import swal from "sweetalert";
import { useParams } from "react-router-dom";

export default function AddQuiz() {
    const {id}=useParams();
     
    const [question, setquestion] = useState('');
    const [op1, setop1] = useState('');
    const [op2, setop2] = useState('');
    const [op3, setop3] = useState('');
    const [op4, setop4] = useState('');

    const onChangequestion = (e) => {
        setquestion(e.target.value);
    }

    const onChangeop1 = (e) => {
        setop1(e.target.value);
    }

    const onChangeop2 = (e) => {
        setop2(e.target.value);
    }

    const onChangeop3 = (e) => {
        setop3(e.target.value);
    }

    const onChangeop4 = (e) => {
        setop4(e.target.value);
    }

     

    const onSubmit = (e) => {
        e.preventDefault();
         
        console.log(`Form submitted:`);
        console.log(`question: ${question}`);
        console.log(`op1: ${op1}`);
        console.log(`op2: ${op2}`);
        console.log(`op3: ${op3}`);
        console.log(`op4: ${op4}`);

        const newTodo = {
            question: question,
            op1: op1,
            op2: op2,
            op3: op3,
            op4: op4,
        };

         

            axios.post(`http://localhost:1337/units/${id}/quiz`, newTodo)
            .then((res) => {
                console.log(res.data.quiz);
                    swal({
                      icon: "success",
                      text: "Successfully created",
                    });
                    setquestion('');
            setop1('');
            setop2('');
            setop3('');
            setop4('');
                   
                })
                .catch((error) => {
                  console.log(error);
                  swal({
                    icon: "warning",
                    text: "Error",
                  });
                });
    }
     
     
     
        return (
            <div style={{marginTop: 20}}>
               
                <form onSubmit={onSubmit}>
                    <div className='card'> 
                     
                    <div className="form-control">
                     <br></br>
                        <label>Write the question.</label>
                        <input  type="text"
                                className="form-control"
                                value={question}
                                required
                                onChange={onChangequestion}
                                />
                        <br></br>
                         
                       

<label for="basic-url" class="form-label">Option 01</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0"
                        name="flexRadioDefault" id="flexRadioDefault1" 
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  value={op1}
  onChange={onChangeop1}
  for="flexRadioDefault1"
  aria-label="Text input with radio button"/>
</div>

<br></br>
<label for="basic-url" class="form-label">Option 02</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0"
                        name="flexRadioDefault" id="flexRadioDefault2" 
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  value={op2}
  onChange={onChangeop2}
  for="flexRadioDefault2"
  aria-label="Text input with radio button"/>
</div>

<br></br>
<label for="basic-url" class="form-label">Option 03</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0"
                        name="flexRadioDefault" id="flexRadioDefault3" 
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  value={op3}
  onChange={onChangeop3}
  for="flexRadioDefault3"
  aria-label="Text input with radio button"/>
</div>
                         
                        <br></br>
                        <label for="basic-url" class="form-label">Option 04</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0" 
                        name="flexRadioDefault" id="flexRadioDefault4"
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  value={op4}
  onChange={onChangeop4}
  for="flexRadioDefault4"
  aria-label="Text input with radio button"/>
</div>
                        <br></br>
                         
                        <input type="submit" value="Save Question" className="btn btn-primary" />
                        <br></br>
                        <br></br>
                    </div>
                    </div>
                </form>
                <br></br>
            </div>
        )
    }

 
     