import React from 'react'
import useLoadData from "./useLoadData"

function BasicEditing() {

    const {displayInfo} = useLoadData("http://localhost:3001/basic")

    return (
    <div>
      <h2>Basic Editing</h2>
      {displayInfo}
    </div>
  )
}

export default BasicEditing
