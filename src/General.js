import React from 'react'
import useLoadData from "./useLoadData"

function General () {
        
    const {displayInfo} = useLoadData("http://localhost:3001/general")
   
    return (
    <div>
          <div > 
            <div className="inner-container" >  .
              <h2 className="h2">General</h2>
              <div className="task-listing" >                               
                  {displayInfo}
              </div>
            </div>   
          </div>  
    </div>
    )
  }


export default General


