import React from 'react'
 
function Pdf(props) {
  return (
     props.url.map((article)=>(
    <div style={{textAlign:"center",height:"900px",width:"900px"}}>
        {/* <iframe title="myframe" style={{height:"700px",width:"850px"}}
        src={article.articleUrl}
        width="500"
        height="375"
      >
      </iframe> */}
    <embed title="myframe" src={article.articleUrl+'#toolbar=0'} onContextMenu={(event) => event.preventDefault()} width="600px" height="600px" />     
    </div>
     ))
  )
}

export default Pdf

  