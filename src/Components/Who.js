import React from 'react'
import "../Style/Who.css"
import reactlogo from "../images/reactlogo-nobg.png"

function Who() {
  return (
    <div className='who'id='projects' >
           
       <div className='who-image'>

        <img src={reactlogo} alt='reactlogo' />
       </div>
        
    </div>
  )
}

export default Who