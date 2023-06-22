import React from 'react'
import useLoadData from "./useLoadData"

function BasicEditing() {

    const {displayInfo} = useLoadData("basic")

    return (
    <div>
      <div className="inner-container" >  .
        <h2 className="h2">Basic Editing</h2>
        <div className="task-listing" >                               
            {displayInfo}
        </div>
      </div>  
    </div>
  )
}

export default BasicEditing
