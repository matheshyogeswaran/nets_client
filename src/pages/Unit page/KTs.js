import Edit from './EditKT';
import Delete from './DeleteKT';

const KTs = ({ todo }) => {
    return(
        <div>
      <div className='card'>
        <div className='card-body' style={{ backgroundColor: '#DDEDF8' }}>
          <div class='col-lg-12'> 
         
        <h3 style={{ font: '25px', color: '#000000' }}>
              {todo.kt_name}
            </h3>
             <div>
              
              <Edit key={todo._id} todo={todo} />
             
             </div>
              
            <p>{todo.kt_intro} </p>
            <div>
              
              <Delete key={todo._id} todo={todo} />
             
             </div>
            </div>
            </div>
            </div>
            </div>
    )
}
export default KTs;