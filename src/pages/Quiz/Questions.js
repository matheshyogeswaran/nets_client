import Edit from "./EditQ";
import Delete from "./DeleteQ";
 
 

const Questions = ({ todo }) => {
    return(
        <div>
      <div className='card'>
        <div className='container'> 
        <br></br>
        <p>{todo.question}</p>

        <div class="input-group">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio" value="" name="flexRadioDefault" id="flexRadioDefault1" aria-label="Radio button for following text input"/>
  </div>
  <label type="text" class="form-control" for="flexRadioDefault1" aria-label="Text input with radio button">{todo.op1}</label>
</div>
<br></br>
<div class="input-group">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio" value="" name="flexRadioDefault" id="flexRadioDefault2" aria-label="Radio button for following text input"/>
  </div>
  <label type="text" class="form-control" for="flexRadioDefault2" aria-label="Text input with radio button">{todo.op2}</label>
</div>
<br></br>
<div class="input-group">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio" value="" name="flexRadioDefault" id="flexRadioDefault3" aria-label="Radio button for following text input"/>
  </div>
  <label type="text" class="form-control" for="flexRadioDefault3" aria-label="Text input with radio button">{todo.op3}</label>
</div>
<br></br>
<div class="input-group">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio" value="" name="flexRadioDefault" id="flexRadioDefault4" aria-label="Radio button for following text input"/>
  </div>
  <label type="text" class="form-control" for="flexRadioDefault4" aria-label="Text input with radio button">{todo.op4}</label>
</div>

<br></br>
<div className="container-fluid d-grid gap-2 d-md-flex justify-content-md-end">
 
    <Edit key={todo._id} todo={todo} />
 
    <Delete key={todo._id} todo={todo} />
                     </div>
<br></br>
      </div>
  </div>
            </div>
    )
}
export default Questions;

 


 