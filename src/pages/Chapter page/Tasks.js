import Edit from "./EditTask";
import Delete from "./DeleteTask";
import { Link } from "react-router-dom";

const Tasks = ({ todo }) => {
    return(
        <div>
      <div className='card'>
        <div className='card-body' style={{ backgroundColor: '#DDEDF8' }}>
          <div class='col-lg-12'> 
         
        <h3 style={{ font: '25px', color: '#000000' }}>
        <Link to={"/Unit/"+todo._id} style={{textDecoration:"none",color: "#000000"}}> {todo.unitName}</Link>
            </h3>
             <div>
              
              <Edit key={todo._id} todo={todo} />
             
             </div>
              
            <p>{todo.unitDesc} </p>
            <div>
              
              <Delete key={todo._id} todo={todo} />
             
             </div>
            </div>
            </div>
            </div>
            </div>
    )
}
export default Tasks;