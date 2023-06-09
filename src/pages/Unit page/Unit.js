import React from 'react'
import { useState } from 'react';

import AddKT from './AddKT';
import Header from '../../components/Header';
import UnitList from './UnitList';

function Unit() {
    const [showAddTask, setShowAddTask] = useState(false);  
  return (
    <div>
        <div className="container">
        <h4 style={{ font: "25px" , color: "#000000" }}>KT Sessions</h4>
<Header showForm={() => setShowAddTask(!showAddTask)}  changeTextAndColor={showAddTask} />
 
{showAddTask && <AddKT   />}
 <br></br>

<UnitList></UnitList>
</div>
</div> 
     
  )
}

export default Unit