import React from 'react'
import { useEffect } from 'react';
function Detailloading() {

  return (
    <>
    <div className=' d-flex justify-content-center align-items-center gap-3 vh-100' style={{height:500}}>
       <div className='bg-body-secondary'style={{height:400,width:400 }}>
       </div>
       <div className='bg-body-secondary 'style={{height:400,width:500}}>
       <h5 class="card-title placeholder-glow p-2 ">
      <span class="placeholder col-10 rounded"></span>
    </h5>

       <div>
       <h5 class="card-title placeholder-glow p-2 ">
      <span class="placeholder col-5 "></span>
    </h5>
       </div>
       <div>
       <h5 class="card-title placeholder-glow p-2 ">
      <span class="placeholder col-5 "></span>
    </h5>
       </div>

       <div style={{marginTop:150}}>
       <h5 class="card-title placeholder-glow ps-2" >
      <span class="placeholder col-5  "style={{width:150,height:40}}></span>
    </h5>
       </div>
       </div>
       
        
    </div>
    </>
  )
}

export default Detailloading
