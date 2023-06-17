import React from 'react'
import useLoadData from "./useLoadData"

function General () {
        
    const {displayInfo} = useLoadData("http://localhost:3001/general")
   
    return (
      <div >                                 
        <h2>General</h2>
          {displayInfo}
      </div>
    )
  }


export default General


