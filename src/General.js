import React from 'react'
import useLoadData from "./useLoadData"

function General () {
        
    const {displayInfo} = useLoadData("http://localhost:3001/general")
   
    return (
      <div className="container"  >                                 
        <h2>General</h2>
          {displayInfo}
      </div>
    )
  }


export default General


