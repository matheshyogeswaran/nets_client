import Edit from "./EditArticle";
import Delete from "./DeleteArticle";
import { Link } from "react-router-dom";
import pdf from "../../images/pdf.png";

const Articles = ({ todo }) => {
    return(
        <div>
      <div className='card'>
        <div className='card-body' style={{ backgroundColor: '#DDEDF8' }}>
          <div class='col-lg-12'> 
         
        <h3 style={{ font: '25px', color: '#000000' }}>
              {todo.articleName}
            </h3>
             <div>
              
              <Edit key={todo._id} todo={todo} />
             
             </div>
              
            <p>{todo.articleDesc} </p>
            <div>
              
              <Delete key={todo._id} todo={todo} />
             
             </div>
              
            </div>
            <p> <Link to='/article/View'><img src={pdf} height='20px' width='20px' alt='pdf'></img></Link> </p>
            </div>
            </div>
            </div>
    )
}
export default Articles;