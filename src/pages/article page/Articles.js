import Edit from "./EditArticle";
import Delete from "./DeleteArticle";
 

const Articles = ({ todo }) => {
    return(
        <div>
      <div className='card'>
        <div className='card-body' style={{ backgroundColor: '#DDEDF8' }}>
          <div class='col-lg-12'> 
         
        <h3 style={{ font: '25px', color: '#000000' }}>
              {todo.art_name}
            </h3>
             <div>
              
              <Edit key={todo._id} todo={todo} />
             
             </div>
              
            <p>{todo.art_intro} </p>
            <div>
              
              <Delete key={todo._id} todo={todo} />
             
             </div>
            </div>
            </div>
            </div>
            </div>
    )
}
export default Articles;