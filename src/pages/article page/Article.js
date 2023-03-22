import React from 'react'
import { useState } from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

import AddArticle from './AddArticle';
import Header from "../../components/Header";
import pdf from "../../images/pdf.png";
import Del from "../../components/Del";
import Ed from "../../components/Ed";
import ArticleList from './ArticleList';
 
 
function Article() {
    const [showAddTask, setShowAddTask] = useState(false);  
  return (
    <div>
        <div className="container">

 
<Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask}  />

 
{showAddTask && <AddArticle   />}
 
 <br></br>
<div className='card'> 
<div className="card-body" style={{backgroundColor:"#DDEDF8"}}>
    <div class="col-lg-12">
    <h3 style={{ font: "25px" , color: "#000000" }}>Article 01</h3>
    <div> 
    <FaPencilAlt type="button" data-bs-toggle="modal" data-bs-target="#editunit" className="editIcon" class="rounded float-end" style={{color:"blue",justifyContent:"end"}}/>
    <Ed/> 
    </div> 
    </div>

    <div class="col-lg-12">
    <p>Introduction of Article 01</p>
    <div> 
    <p><FaTimes type="button" className="delIcon" class="rounded float-end" style={{color:"red"}} data-bs-toggle="modal" data-bs-target="#del"/></p>
    <Del/>
    </div>

    <p> <Link to='/article/View'><img src={pdf} height='20px' width='20px' alt='pdf'></img></Link> </p>
    </div>
     
</div>
</div>
<ArticleList></ArticleList>
 </div>
</div> 
    
  )
}

export default Article