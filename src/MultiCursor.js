import React from 'react'
import useLoadData from "./useLoadData"

function MultiCursor() {
  
   const {displayInfo} = useLoadData("http://localhost:3001/multi")

  return (
    <div >
      <h2>Multi-Cursor and Selection</h2>
      {displayInfo}
    </div>
  )
}

export default MultiCursor
