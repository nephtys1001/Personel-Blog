import React from 'react'
import "../Style/Who.css"
import reactlogo from "../images/reactlogo-nobg.png"

function Who() {
  return (
    <div className='who'id='myjob' >
           
       <div className='who-image'>

        <img src={reactlogo} alt='reactlogo' />
       </div>

       <div className='infos'> 
       <h1 id='job-title'>Name : <span>Burak Alkan</span> </h1>
       <h1 id='age'>Age : <span>21</span> </h1>
       <h1 id='job-title'>Job Title : <span>Software Engineer</span> </h1>

       
       </div>
        
    </div>
  )
}

export default Who