import Edit from './EditKT';
import Delete from './DeleteKT';
import { Link } from "react-router-dom";
import video from "../../images/video.png";

const KTs = ({ todo }) => {
    return(
        <div>
      <div className='card'>
        <div className='card-body' style={{ backgroundColor: '#DDEDF8' }}>
          <div class='col-lg-12'> 
         
        <h3 style={{ font: '25px', color: '#000000' }}>
              {todo.sessionName}
            </h3>
             <div>
              
              <Edit key={todo._id} todo={todo} />
             
             </div>
              
            <p>{todo.sessionDesc} </p>
            <div>
              
              <Delete key={todo._id} todo={todo} />
             
             </div>
              
            </div>
            <p> <Link to='/Unit/View'><img src={video} height='20px' width='20px' alt='pdf'></img></Link> </p>
            </div>
            </div>
            </div>
    )
}
export default KTs;