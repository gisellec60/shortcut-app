import React from 'react'
import useLoadData from "./useLoadData"

function MultiCursor() {
  
   const {displayInfo} = useLoadData("multicursor")

  return (
    <div>
      <div className="inner-container" >  .
        <h2 className="h2">Multi-Cursor</h2>
        <div className="task-listing" >                               
            {displayInfo}
        </div>
      </div>   
  </div>
  )
}

export default MultiCursor
