import React from 'react'
import useLoadData from "./useLoadData"

function MultiCursor() {
  
   const {displayInfo} = useLoadData("http://localhost:3001/multi-cursor")

  return (
    <div className="container" >
      <h2>Multi-Cursor and Selection</h2>
      {displayInfo}
    </div>
  )
}

export default MultiCursor
